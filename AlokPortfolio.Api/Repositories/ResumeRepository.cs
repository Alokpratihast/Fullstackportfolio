using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class ResumeRepository : IResumeRepository
{
    private readonly ApplicationDbContext _context;

    public ResumeRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Resume>> GetAllAsync()
    {
        return await _context.Resumes
            .OrderByDescending(x => x.UploadedAt)
            .ToListAsync();
    }

    public async Task<Resume?> GetByIdAsync(int id)
    {
        return await _context.Resumes.FindAsync(id);
    }

    public async Task<Resume?> GetActiveResumeAsync()
    {
        return await _context.Resumes
            .OrderByDescending(x => x.UploadedAt)
            .FirstOrDefaultAsync(x => x.IsActive);
    }

    public async Task DeactivateAllAsync()
    {
        await _context.Resumes
            .Where(x => x.IsActive)
            .ExecuteUpdateAsync(setters => setters.SetProperty(x => x.IsActive, false));
    }

    public async Task AddAsync(Resume resume)
    {
        await _context.Resumes.AddAsync(resume);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Resume resume)
    {
        _context.Resumes.Update(resume);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Resume resume)
    {
        _context.Resumes.Remove(resume);
        await _context.SaveChangesAsync();
    }
}
