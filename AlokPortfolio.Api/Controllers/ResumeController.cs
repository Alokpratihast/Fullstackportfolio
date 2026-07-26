using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly IResumeService _service;

    public ResumeController(IResumeService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Resumes
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ResumeResponseDto>>> GetAll()
    {
        var resumes = await _service.GetAllResumesAsync();

        return Ok(new
        {
            Success = true,
            Message = "Resumes fetched successfully.",
            Data = resumes
        });
    }

    // ============================================================
    // Get Resume By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ResumeResponseDto>> GetById(int id)
    {
        var resume = await _service.GetResumeByIdAsync(id);

        if (resume == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Resume with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Resume fetched successfully.",
            Data = resume
        });
    }

    // ============================================================
    // Get Active Resume
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("active")]
    public async Task<ActionResult<ResumeResponseDto>> GetActive()
    {
        var resume = await _service.GetActiveResumeAsync();

        if (resume == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = "No active resume found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Active resume fetched successfully.",
            Data = resume
        });
    }

    // ============================================================
    // Upload Resume
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<ResumeResponseDto>> Upload(
        [FromForm] ResumeUploadDto dto)
    {
        var resume = await _service.UploadResumeAsync(dto);

        return Ok(new
        {
            Success = true,
            Message = "Resume uploaded successfully.",
            Data = resume
        });
    }

    // ============================================================
    // Update Resume
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(
        int id,
        [FromForm] ResumeUpdateDto dto)
    {
        var updated = await _service.UpdateResumeAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Resume with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Resume updated successfully."
        });
    }

    // ============================================================
    // Delete Resume
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteResumeAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Resume with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Resume deleted successfully."
        });
    }
}