namespace AlokPortfolio.Api.DTOs;

public class SkillUpdateDto
{
    public string Name { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public int Percentage { get; set; }

    public int DisplayOrder { get; set; }
}