namespace AlokPortfolio.Api.DTOs;

public class DashboardResponseDto
{
    public DashboardSummaryDto Summary { get; set; } = new();

    public List<RecentMessageDto> RecentMessages { get; set; } = new();

    public List<RecentProjectDto> RecentProjects { get; set; } = new();
}