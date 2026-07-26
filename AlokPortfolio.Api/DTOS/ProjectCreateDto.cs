using System.ComponentModel.DataAnnotations;

namespace AlokPortfolio.Api.DTOs;

public class ProjectCreateDto
{
    
    public string Title { get; set; } = string.Empty;

   

    public string Description { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;

    public string GithubUrl { get; set; } = string.Empty;

    public string LiveUrl { get; set; } = string.Empty;

    public string Technologies { get; set; } = string.Empty;

    public bool IsFeatured { get; set; }
}