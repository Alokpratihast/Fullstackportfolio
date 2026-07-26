using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _projectService;
    private readonly IMapper _mapper;

    public ProjectsController(
        IProjectService projectService,
        IMapper mapper)
    {
        _projectService = projectService;
        _mapper = mapper;
    }

    // ============================================================
    // Get All Projects
    // Public API
    // Anyone can view portfolio projects
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectResponseDto>>> GetProjects()
    {
        var projects = await _projectService.GetAllProjectsAsync();

        var response = _mapper.Map<List<ProjectResponseDto>>(projects);

        return Ok(new
        {
            Success = true,
            Message = "Projects fetched successfully.",
            Data = response
        });
    }

    // ============================================================
    // Get Project By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ProjectResponseDto>> GetProjectById(int id)
    {
        var project = await _projectService.GetProjectByIdAsync(id);

        if (project == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Project with Id {id} not found."
            });
        }

        var response = _mapper.Map<ProjectResponseDto>(project);

        return Ok(new
        {
            Success = true,
            Message = "Project fetched successfully.",
            Data = response
        });
    }

    // ============================================================
    // Create Project
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<IActionResult> CreateProject(ProjectCreateDto dto)
    {
        await _projectService.AddProjectAsync(dto);

        return Ok(new
        {
            Success = true,
            Message = "Project created successfully."
        });
    }

    // ============================================================
    // Update Project
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateProject(
        int id,
        ProjectUpdateDto dto)
    {
        var updated = await _projectService.UpdateProjectAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Project with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Project updated successfully."
        });
    }

    // ============================================================
    // Delete Project
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        var project = await _projectService.GetProjectByIdAsync(id);

        if (project == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Project with Id {id} not found."
            });
        }

        await _projectService.DeleteProjectAsync(id);

        return Ok(new
        {
            Success = true,
            Message = "Project deleted successfully."
        });
    }
}