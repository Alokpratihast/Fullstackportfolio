using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class SocialLinkRepository : ISocialLinkRepository
{
    private readonly ApplicationDbContext _context;

    public SocialLinkRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<SocialLink>> GetAllAsync()
    {
        return await _context.SocialLinks
            .OrderBy(x => x.DisplayOrder)
            .ToListAsync();
    }

    public async Task<SocialLink?> GetByIdAsync(int id)
    {
        return await _context.SocialLinks.FindAsync(id);
    }

    public async Task AddAsync(SocialLink socialLink)
    {
        await _context.SocialLinks.AddAsync(socialLink);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(SocialLink socialLink)
    {
        _context.SocialLinks.Update(socialLink);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(SocialLink socialLink)
    {
        _context.SocialLinks.Remove(socialLink);
        await _context.SaveChangesAsync();
    }
}