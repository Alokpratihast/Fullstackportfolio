using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.DTOS;
using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AlokPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;

    public AuthController(IUserService userService)
    {
        _userService = userService;
    }

    // =====================================================
    // Register New User
    // Public API
    // =====================================================

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto registerDto)
    {
        await _userService.RegisterAsync(registerDto);

        return Ok(new
        {
            Success = true,
            Message = "User registered successfully."
        });
    }

    // =====================================================
    // Login User
    // Public API
    // =====================================================

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        var response = await _userService.LoginAsync(loginDto);

        return Ok(new
        {
            Success = true,
            Message = "Login successful.",
            Data = response
        });
    }

    // =====================================================
    // Get Logged In User Profile
    // JWT Required
    // =====================================================

    [Authorize]
    [HttpGet("profile")]
    public IActionResult GetProfile()
    {
        return Ok(new
        {
            Success = true,
            Message = "JWT Authentication Successful",

            User = User.Identity?.Name,

            Email = User.FindFirst(ClaimTypes.Email)?.Value,

            Role = User.FindFirst(ClaimTypes.Role)?.Value
        });
    }

    // =====================================================
    // Get All Users
    // Only Admin can access
    // =====================================================

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _userService.GetAllUsersAsync();

        return Ok(new
        {
            Success = true,
            Message = "Users fetched successfully.",
            Data = users
        });
    }

    // =====================================================
    // Get User By Id
    // Only Admin can access
    // =====================================================

    [Authorize(Roles = "Admin")]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetUserById(int id)
    {
        var user = await _userService.GetUserByIdAsync(id);

        if (user == null)
        {
            return NotFound(new
            {
                Success = false,
                Message = $"User with Id {id} not found."
            });
        }

        return Ok(new
        {
            Success = true,
            Message = "User fetched successfully.",
            Data = user
        });
    }
}