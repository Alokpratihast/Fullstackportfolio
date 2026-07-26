using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IEducationRepository
{
    Task<IEnumerable<Education>> GetAllAsync();

    Task<Education?> GetByIdAsync(int id);

    Task AddAsync(Education education);

    Task UpdateAsync(Education education);

    Task DeleteAsync(Education education);
}