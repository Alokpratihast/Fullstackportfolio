namespace AlokPortfolio.Api.DTOs;

public class DashboardSummaryDto
{
    public int TotalProjects { get; set; }

    public int TotalSkills { get; set; }

    public int TotalExperiences { get; set; }

    public int TotalEducations { get; set; }

    public int TotalCertificates { get; set; }

    public int TotalSocialLinks { get; set; }

    public int TotalMessages { get; set; }

    public bool HasActiveResume { get; set; }
}