using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface IResumeService
{
    Task<IEnumerable<ResumeResponseDto>> GetAllResumesAsync();

    Task<ResumeResponseDto?> GetResumeByIdAsync(int id);

    Task<ResumeResponseDto?> GetActiveResumeAsync();

    Task<ResumeResponseDto> UploadResumeAsync(ResumeUploadDto dto);

    Task<bool> UpdateResumeAsync(int id, ResumeUpdateDto dto);

    Task<bool> DeleteResumeAsync(int id);
}