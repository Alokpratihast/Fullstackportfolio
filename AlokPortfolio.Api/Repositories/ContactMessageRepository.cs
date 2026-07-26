using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class ContactMessageRepository : IContactMessageRepository
{
    private readonly ApplicationDbContext _context;

    public ContactMessageRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ContactMessage>> GetAllAsync()
    {
        return await _context.ContactMessages
            .OrderByDescending(x => x.CreatedAt)
            .ToListAsync();
    }

    public async Task<ContactMessage?> GetByIdAsync(int id)
    {
        return await _context.ContactMessages.FindAsync(id);
    }

    public async Task AddAsync(ContactMessage contactMessage)
    {
        await _context.ContactMessages.AddAsync(contactMessage);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(ContactMessage contactMessage)
    {
        _context.ContactMessages.Update(contactMessage);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(ContactMessage contactMessage)
    {
        _context.ContactMessages.Remove(contactMessage);
        await _context.SaveChangesAsync();
    }
}