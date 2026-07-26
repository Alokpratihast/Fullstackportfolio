namespace AlokPortfolio.Api.DTOs;

public class ProjectUpdateDto
{
    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Technologies { get; set; } = string.Empty;

    // Optional while updating
    public string? GithubUrl { get; set; }

    // Optional while updating
    public string? LiveUrl { get; set; }

    // Optional while updating
    public string? ImageUrl { get; set; }

    public bool IsFeatured { get; set; }
}