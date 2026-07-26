using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EducationsController : ControllerBase
{
    private readonly IEducationService _service;

    public EducationsController(IEducationService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Educations
    // Public API
    // Anyone can view education details
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<EducationResponseDto>>> GetAll()
    {
        var educations = await _service.GetAllEducationsAsync();

        return Ok(new
        {
            Success = true,
            Message = "Education records fetched successfully.",
            Data = educations
        });
    }

    // ============================================================
    // Get Education By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<EducationResponseDto>> GetById(int id)
    {
        var education = await _service.GetEducationByIdAsync(id);

        if (education == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Education record with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Education record fetched successfully.",
            Data = education
        });
    }

    // ============================================================
    // Create Education
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<EducationResponseDto>> Create(EducationCreateDto dto)
    {
        var education = await _service.AddEducationAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = education.Id },
            new
            {
                Success = true,
                Message = "Education record created successfully.",
                Data = education
            });
    }

    // ============================================================
    // Update Education
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, EducationUpdateDto dto)
    {
        var updated = await _service.UpdateEducationAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Education record with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Education record updated successfully."
        });
    }

    // ============================================================
    // Delete Education
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteEducationAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Education record with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Education record deleted successfully."
        });
    }
}