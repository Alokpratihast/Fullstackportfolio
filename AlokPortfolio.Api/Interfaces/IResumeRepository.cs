using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IResumeRepository
{
    Task<IEnumerable<Resume>> GetAllAsync();

    Task<Resume?> GetByIdAsync(int id);

    Task<Resume?> GetActiveResumeAsync();

    Task DeactivateAllAsync();

    Task AddAsync(Resume resume);

    Task UpdateAsync(Resume resume);

    Task DeleteAsync(Resume resume);
}
