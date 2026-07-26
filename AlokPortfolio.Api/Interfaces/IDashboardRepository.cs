using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface IDashboardRepository
{
    Task<DashboardSummaryDto> GetDashboardSummaryAsync();

    Task<DashboardResponseDto> GetDashboardDataAsync();
}