namespace AlokPortfolio.Api.DTOs;

public class EducationResponseDto
{
    public int Id { get; set; }

    public string Degree { get; set; } = string.Empty;

    public string Institution { get; set; } = string.Empty;

    public string FieldOfStudy { get; set; } = string.Empty;

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string Grade { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }

    public DateTime CreatedAt { get; set; }
}