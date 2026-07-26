namespace AlokPortfolio.Api.DTOs;

public class CertificateCreateDto
{
    public string Title { get; set; } = string.Empty;

    public string Issuer { get; set; } = string.Empty;

    public DateTime IssueDate { get; set; }

    public string CredentialId { get; set; } = string.Empty;

    public string CredentialUrl { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }
}