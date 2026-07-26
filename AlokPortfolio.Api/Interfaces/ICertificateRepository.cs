using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface ICertificateRepository
{
    Task<IEnumerable<Certificate>> GetAllAsync();

    Task<Certificate?> GetByIdAsync(int id);

    Task AddAsync(Certificate certificate);

    Task UpdateAsync(Certificate certificate);

    Task DeleteAsync(Certificate certificate);
}