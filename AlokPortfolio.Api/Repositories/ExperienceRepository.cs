using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class ExperienceRepository : IExperienceRepository
{
    private readonly ApplicationDbContext _context;

    public ExperienceRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Experience>> GetAllAsync()
    {
        return await _context.Experiences
            .OrderBy(x => x.DisplayOrder)
            .ToListAsync();
    }

    public async Task<Experience?> GetByIdAsync(int id)
    {
        return await _context.Experiences.FindAsync(id);
    }

    public async Task AddAsync(Experience experience)
    {
        await _context.Experiences.AddAsync(experience);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Experience experience)
    {
        _context.Experiences.Update(experience);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Experience experience)
    {
        _context.Experiences.Remove(experience);
        await _context.SaveChangesAsync();
    }
}