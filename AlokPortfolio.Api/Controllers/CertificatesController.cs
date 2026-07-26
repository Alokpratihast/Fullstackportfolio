using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CertificatesController : ControllerBase
{
    private readonly ICertificateService _service;

    public CertificatesController(ICertificateService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Certificates
    // Public API
    // Anyone can view portfolio certificates
    // ============================================================

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CertificateResponseDto>>> GetAll()
    {
        var certificates = await _service.GetAllCertificatesAsync();

        return Ok(new
        {
            Success = true,
            Message = "Certificates fetched successfully.",
            Data = certificates
        });
    }

    // ============================================================
    // Get Certificate By Id
    // Public API
    // ============================================================

    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<CertificateResponseDto>> GetById(int id)
    {
        var certificate = await _service.GetCertificateByIdAsync(id);

        if (certificate == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Certificate with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Certificate fetched successfully.",
            Data = certificate
        });
    }

    // ============================================================
    // Create Certificate
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<CertificateResponseDto>> Create(CertificateCreateDto dto)
    {
        var certificate = await _service.AddCertificateAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = certificate.Id },
            new
            {
                Success = true,
                Message = "Certificate created successfully.",
                Data = certificate
            });
    }

    // ============================================================
    // Update Certificate
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, CertificateUpdateDto dto)
    {
        var updated = await _service.UpdateCertificateAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Certificate with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Certificate updated successfully."
        });
    }

    // ============================================================
    // Delete Certificate
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteCertificateAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Certificate with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Certificate deleted successfully."
        });
    }
}