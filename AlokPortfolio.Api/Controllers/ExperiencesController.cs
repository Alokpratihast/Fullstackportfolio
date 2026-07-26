using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExperiencesController : ControllerBase
{
    private readonly IExperienceService _service;

    public ExperiencesController(IExperienceService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Experiences
    // Public API
    // Anyone can view work experience
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ExperienceResponseDto>>> GetAll()
    {
        var experiences = await _service.GetAllExperiencesAsync();

        return Ok(new
        {
            Success = true,
            Message = "Experience records fetched successfully.",
            Data = experiences
        });
    }

    // ============================================================
    // Get Experience By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ExperienceResponseDto>> GetById(int id)
    {
        var experience = await _service.GetExperienceByIdAsync(id);

        if (experience == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Experience record with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Experience record fetched successfully.",
            Data = experience
        });
    }

    // ============================================================
    // Create Experience
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<ExperienceResponseDto>> Create(ExperienceCreateDto dto)
    {
        var experience = await _service.AddExperienceAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = experience.Id },
            new
            {
                Success = true,
                Message = "Experience record created successfully.",
                Data = experience
            });
    }

    // ============================================================
    // Update Experience
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, ExperienceUpdateDto dto)
    {
        var updated = await _service.UpdateExperienceAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Experience record with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Experience record updated successfully."
        });
    }

    // ============================================================
    // Delete Experience
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteExperienceAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Experience record with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Experience record deleted successfully."
        });
    }
}