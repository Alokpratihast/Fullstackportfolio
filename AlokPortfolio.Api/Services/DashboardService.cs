using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;

namespace AlokPortfolio.Api.Services;

public class DashboardService : IDashboardService
{
    private readonly IDashboardRepository _dashboardRepository;

    public DashboardService(IDashboardRepository dashboardRepository)
    {
        _dashboardRepository = dashboardRepository;
    }

    public async Task<DashboardSummaryDto> GetDashboardSummaryAsync()
    {
        return await _dashboardRepository.GetDashboardSummaryAsync();
    }

    public async Task<DashboardResponseDto> GetDashboardDataAsync()
    {
        return await _dashboardRepository.GetDashboardDataAsync();
    }
}