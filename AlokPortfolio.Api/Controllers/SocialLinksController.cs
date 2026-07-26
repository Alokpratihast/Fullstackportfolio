using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SocialLinksController : ControllerBase
{
    private readonly ISocialLinkService _service;

    public SocialLinksController(ISocialLinkService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Social Links
    // Public API
    // Anyone can view portfolio social links
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SocialLinkResponseDto>>> GetAll()
    {
        var socialLinks = await _service.GetAllSocialLinksAsync();

        return Ok(new
        {
            Success = true,
            Message = "Social links fetched successfully.",
            Data = socialLinks
        });
    }

    // ============================================================
    // Get Social Link By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<SocialLinkResponseDto>> GetById(int id)
    {
        var socialLink = await _service.GetSocialLinkByIdAsync(id);

        if (socialLink == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Social link with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Social link fetched successfully.",
            Data = socialLink
        });
    }

    // ============================================================
    // Create Social Link
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<SocialLinkResponseDto>> Create(
        SocialLinkCreateDto dto)
    {
        var socialLink = await _service.AddSocialLinkAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = socialLink.Id },
            new
            {
                Success = true,
                Message = "Social link created successfully.",
                Data = socialLink
            });
    }

    // ============================================================
    // Update Social Link
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(
        int id,
        SocialLinkUpdateDto dto)
    {
        var updated = await _service.UpdateSocialLinkAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Social link with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Social link updated successfully."
        });
    }

    // ============================================================
    // Delete Social Link
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteSocialLinkAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Social link with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Social link deleted successfully."
        });
    }
}