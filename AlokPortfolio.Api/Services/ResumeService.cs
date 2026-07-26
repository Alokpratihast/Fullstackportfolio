using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;

namespace AlokPortfolio.Api.Services;

public class ResumeService : IResumeService
{
    private readonly IResumeRepository _repository;
    private readonly IMapper _mapper;
    private readonly IWebHostEnvironment _environment;

    public ResumeService(
        IResumeRepository repository,
        IMapper mapper,
        IWebHostEnvironment environment)
    {
        _repository = repository;
        _mapper = mapper;
        _environment = environment;
    }

    public async Task<IEnumerable<ResumeResponseDto>> GetAllResumesAsync()
    {
        var resumes = await _repository.GetAllAsync();

        return _mapper.Map<IEnumerable<ResumeResponseDto>>(resumes);
    }

    public async Task<ResumeResponseDto?> GetResumeByIdAsync(int id)
    {
        var resume = await _repository.GetByIdAsync(id);

        if (resume == null)
            return null;

        return _mapper.Map<ResumeResponseDto>(resume);
    }

    public async Task<ResumeResponseDto?> GetActiveResumeAsync()
    {
        var resume = await _repository.GetActiveResumeAsync();

        if (resume == null)
            return null;

        return _mapper.Map<ResumeResponseDto>(resume);
    }

    public async Task<ResumeResponseDto> UploadResumeAsync(ResumeUploadDto dto)
    {
        // wwwroot/uploads/resumes
        var webRootPath = _environment.WebRootPath;

        if (string.IsNullOrWhiteSpace(webRootPath))
        {
            webRootPath = Path.Combine(_environment.ContentRootPath, "wwwroot");
        }

        var uploadsFolder = Path.Combine(
            webRootPath,
            "uploads",
            "resumes");

        // Folder exist nahi karta to create karo
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }

        // Original file ka extension (.pdf)
        var extension = Path.GetExtension(dto.File.FileName);

        // Unique filename generate karo
        var fileName = $"{Guid.NewGuid()}{extension}";

        // Final path
        var filePath = Path.Combine(uploadsFolder, fileName);

        // File save karo
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await dto.File.CopyToAsync(stream);
        }

        // Database object
        var resume = new Resume
        {
            FileName = fileName,
            FilePath = $"/uploads/resumes/{fileName}",
            ContentType = dto.File.ContentType,
            FileSize = dto.File.Length,
            UploadedAt = DateTime.UtcNow,
            IsActive = true
        };

        await _repository.DeactivateAllAsync();
        await _repository.AddAsync(resume);

        return _mapper.Map<ResumeResponseDto>(resume);
    }




    public async Task<bool> UpdateResumeAsync(int id, ResumeUpdateDto dto)
    {
        var resume = await _repository.GetByIdAsync(id);

        if (resume == null)
            return false;

        // Agar WebRootPath null ho to manually wwwroot use karo
        var webRootPath = _environment.WebRootPath;

        if (string.IsNullOrWhiteSpace(webRootPath))
        {
            webRootPath = Path.Combine(_environment.ContentRootPath, "wwwroot");
        }

        // Old file ka physical path
        var oldFilePath = Path.Combine(
            webRootPath,
            resume.FilePath.TrimStart('/')
                .Replace("/", Path.DirectorySeparatorChar.ToString()));

        // Agar old file exist karti hai to delete karo
        if (File.Exists(oldFilePath))
        {
            File.Delete(oldFilePath);
        }

        // Nayi file ka extension
        var extension = Path.GetExtension(dto.File.FileName);

        // Unique filename
        var newFileName = $"{Guid.NewGuid()}{extension}";

        // Upload folder
        var uploadsFolder = Path.Combine(
            webRootPath,
            "uploads",
            "resumes");

        // Folder nahi hai to create karo
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }

        // Final path
        var newFilePath = Path.Combine(uploadsFolder, newFileName);

        // File save karo
        using (var stream = new FileStream(newFilePath, FileMode.Create))
        {
            await dto.File.CopyToAsync(stream);
        }

        // Database update
        resume.FileName = newFileName;
        resume.FilePath = $"/uploads/resumes/{newFileName}";
        resume.ContentType = dto.File.ContentType;
        resume.FileSize = dto.File.Length;
        resume.UploadedAt = DateTime.UtcNow;

        await _repository.UpdateAsync(resume);

        return true;
    }

    public async Task<bool> DeleteResumeAsync(int id)
    {
        var resume = await _repository.GetByIdAsync(id);

        if (resume == null)
            return false;

        // Agar WebRootPath null ho to manually wwwroot use karo
        var webRootPath = _environment.WebRootPath;

        if (string.IsNullOrWhiteSpace(webRootPath))
        {
            webRootPath = Path.Combine(_environment.ContentRootPath, "wwwroot");
        }

        // Physical file path
        var filePath = Path.Combine(
            webRootPath,
            resume.FilePath.TrimStart('/')
                .Replace("/", Path.DirectorySeparatorChar.ToString()));

        // File delete karo
        if (File.Exists(filePath))
        {
            File.Delete(filePath);
        }

        // Database record delete karo
        await _repository.DeleteAsync(resume);

        return true;
    }
}
