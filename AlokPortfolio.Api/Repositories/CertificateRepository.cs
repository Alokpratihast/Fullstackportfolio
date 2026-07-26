using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class CertificateRepository : ICertificateRepository
{
    private readonly ApplicationDbContext _context;

    public CertificateRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Certificate>> GetAllAsync()
    {
        return await _context.Certificates
            .OrderBy(x => x.DisplayOrder)
            .ToListAsync();
    }

    public async Task<Certificate?> GetByIdAsync(int id)
    {
        return await _context.Certificates.FindAsync(id);
    }

    public async Task AddAsync(Certificate certificate)
    {
        await _context.Certificates.AddAsync(certificate);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Certificate certificate)
    {
        _context.Certificates.Update(certificate);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Certificate certificate)
    {
        _context.Certificates.Remove(certificate);
        await _context.SaveChangesAsync();
    }
}