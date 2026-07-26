namespace AlokPortfolio.Api.DTOs;

public class SkillCreateDto
{
    public string Name { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public int Percentage { get; set; }

    public int DisplayOrder { get; set; }
}