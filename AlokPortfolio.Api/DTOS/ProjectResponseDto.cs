namespace AlokPortfolio.Api.DTOs;

public class ProjectResponseDto
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;

    public string GithubUrl { get; set; } = string.Empty;

    public string LiveUrl { get; set; } = string.Empty;

    public string Technologies { get; set; } = string.Empty;

    public bool IsFeatured { get; set; }
}