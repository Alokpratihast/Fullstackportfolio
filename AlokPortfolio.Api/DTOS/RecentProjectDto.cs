namespace AlokPortfolio.Api.DTOs;

public class RecentProjectDto
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Technologies { get; set; } = string.Empty;

    public bool IsFeatured { get; set; }

    public DateTime CreatedAt { get; set; }
}