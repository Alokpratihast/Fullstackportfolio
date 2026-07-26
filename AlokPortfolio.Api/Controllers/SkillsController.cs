using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SkillsController : ControllerBase
{
    private readonly ISkillService _service;

    public SkillsController(ISkillService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Skills
    // Public API
    // Anyone can view portfolio skills
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SkillResponseDto>>> GetAll()
    {
        var skills = await _service.GetAllSkillsAsync();

        return Ok(new
        {
            Success = true,
            Message = "Skills fetched successfully.",
            Data = skills
        });
    }

    // ============================================================
    // Get Skill By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<SkillResponseDto>> GetById(int id)
    {
        var skill = await _service.GetSkillByIdAsync(id);

        if (skill == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Skill with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Skill fetched successfully.",
            Data = skill
        });
    }

    // ============================================================
    // Create Skill
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<SkillResponseDto>> Create(SkillCreateDto dto)
    {
        var skill = await _service.AddSkillAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = skill.Id },
            new
            {
                Success = true,
                Message = "Skill created successfully.",
                Data = skill
            });
    }

    // ============================================================
    // Update Skill
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, SkillUpdateDto dto)
    {
        var updated = await _service.UpdateSkillAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Skill with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Skill updated successfully."
        });
    }

    // ============================================================
    // Delete Skill
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteSkillAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Skill with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Skill deleted successfully."
        });
    }
}