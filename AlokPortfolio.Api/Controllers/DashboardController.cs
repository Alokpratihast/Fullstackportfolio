using AlokPortfolio.Api.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AlokPortfolio.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize(Roles = "Admin")]
public class DashboardController : ControllerBase
{
    private readonly IDashboardService _dashboardService;

    public DashboardController(IDashboardService dashboardService)
    {
        _dashboardService = dashboardService;
    }

    /// <summary>
    /// Get dashboard summary statistics
    /// </summary>
    [HttpGet("summary")]
    public async Task<IActionResult> GetDashboardSummary()
    {
        var summary = await _dashboardService.GetDashboardSummaryAsync();

        return Ok(new
        {
            success = true,
            message = "Dashboard summary fetched successfully.",
            data = summary
        });
    }

    /// <summary>
    /// Get complete dashboard data
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetDashboard()
    {
        var dashboard = await _dashboardService.GetDashboardDataAsync();

        return Ok(new
        {
            success = true,
            message = "Dashboard data fetched successfully.",
            data = dashboard
        });
    }
}