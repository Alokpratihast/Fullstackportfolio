using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IExperienceRepository
{
    Task<IEnumerable<Experience>> GetAllAsync();

    Task<Experience?> GetByIdAsync(int id);

    Task AddAsync(Experience experience);

    Task UpdateAsync(Experience experience);

    Task DeleteAsync(Experience experience);
}