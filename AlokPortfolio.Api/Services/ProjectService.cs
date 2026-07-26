using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using System.Runtime.InteropServices;

namespace AlokPortfolio.Api.Services;

public class ProjectService : IProjectService
{
    private readonly IProjectRepository _repository;

    public ProjectService(IProjectRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Project>> GetAllProjectsAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Project?> GetProjectByIdAsync(int id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task AddProjectAsync(ProjectCreateDto dto)
    {
        var Project = new Project
        {
            Title = dto.Title,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            GithubUrl = dto.GithubUrl,
            LiveUrl = dto.LiveUrl,
            Technologies = dto.Technologies,
            IsFeatured = dto.IsFeatured
        };

        await _repository.AddAsync(Project);
    }

    public async Task<bool> UpdateProjectAsync(int id, ProjectUpdateDto dto)
    {
        var project = await _repository.GetByIdAsync(id);

        if (project == null)
        {
            return false;
        }

        // Required fields
        project.Title = dto.Title;
        project.Description = dto.Description;
        project.Technologies = dto.Technologies;
        project.IsFeatured = dto.IsFeatured;

        // Optional fields - keep existing value if null
        project.ImageUrl = dto.ImageUrl ?? project.ImageUrl;
        project.GithubUrl = dto.GithubUrl ?? project.GithubUrl;
        project.LiveUrl = dto.LiveUrl ?? project.LiveUrl;

        await _repository.UpdateAsync(project);

        return true;
    }

    public async Task DeleteProjectAsync(int id)
    {
        var project = await _repository.GetByIdAsync(id);

        if (project != null)
        {
            await _repository.DeleteAsync(project);
        }
    }
}