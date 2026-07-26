using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class EducationRepository : IEducationRepository
{
    private readonly ApplicationDbContext _context;

    public EducationRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Education>> GetAllAsync()
    {
        return await _context.Educations
            .OrderBy(x => x.DisplayOrder)
            .ToListAsync();
    }

    public async Task<Education?> GetByIdAsync(int id)
    {
        return await _context.Educations.FindAsync(id);
    }

    public async Task AddAsync(Education education)
    {
        await _context.Educations.AddAsync(education);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Education education)
    {
        _context.Educations.Update(education);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Education education)
    {
        _context.Educations.Remove(education);
        await _context.SaveChangesAsync();
    }
}