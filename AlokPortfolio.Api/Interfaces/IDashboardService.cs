using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface IDashboardService
{
    Task<DashboardSummaryDto> GetDashboardSummaryAsync();

    Task<DashboardResponseDto> GetDashboardDataAsync();
}