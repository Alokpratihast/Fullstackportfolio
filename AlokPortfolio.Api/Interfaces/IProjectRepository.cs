using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IProjectRepository
{
    Task<IEnumerable<Project>> GetAllAsync();

    Task<Project?> GetByIdAsync(int id);

    Task AddAsync(Project project);

    Task UpdateAsync(Project project);

    Task DeleteAsync(Project project);
}