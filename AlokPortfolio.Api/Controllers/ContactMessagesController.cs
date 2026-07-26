using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactMessagesController : ControllerBase
{
    private readonly IContactMessageService _service;

    public ContactMessagesController(IContactMessageService service)
    {
        _service = service;
    }

    // ============================================================
    // Get All Contact Messages
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactMessageResponseDto>>> GetAll()
    {
        var messages = await _service.GetAllContactMessagesAsync();

        return Ok(new
        {
            Success = true,
            Message = "Contact messages fetched successfully.",
            Data = messages
        });
    }

    // ============================================================
    // Get Contact Message By Id
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ContactMessageResponseDto>> GetById(int id)
    {
        var message = await _service.GetContactMessageByIdAsync(id);

        if (message == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Contact message with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Contact message fetched successfully.",
            Data = message
        });
    }

    // ============================================================
    // Create Contact Message
    // Public API
    // Anyone can send a contact message
    // ============================================================

    [AllowAnonymous]
    [HttpPost]
    public async Task<ActionResult<ContactMessageResponseDto>> Create(ContactMessageCreateDto dto)
    {
        var message = await _service.AddContactMessageAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = message.Id },
            new
            {
                Success = true,
                Message = "Contact message sent successfully.",
                Data = message
            });
    }

    // ============================================================
    // Update Contact Message
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, ContactMessageUpdateDto dto)
    {
        var updated = await _service.UpdateContactMessageAsync(id, dto);

        if (!updated)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Contact message with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Contact message updated successfully."
        });
    }

    // ============================================================
    // Delete Contact Message
    // Admin Only
    // ============================================================

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _service.DeleteContactMessageAsync(id);

        if (!deleted)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"Contact message with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "Contact message deleted successfully."
        });
    }
}