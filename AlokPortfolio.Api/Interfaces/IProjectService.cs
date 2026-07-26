using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IProjectService
{
    Task<IEnumerable<Project>> GetAllProjectsAsync();

    Task<Project?> GetProjectByIdAsync(int id);

    Task AddProjectAsync(ProjectCreateDto dto);

    Task<bool> UpdateProjectAsync(int id, ProjectUpdateDto dto);

    Task DeleteProjectAsync(int id);
}