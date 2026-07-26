namespace AlokPortfolio.Api.DTOs;

public class SocialLinkCreateDto
{
    public string Platform { get; set; } = string.Empty;

    public string Url { get; set; } = string.Empty;

    public string Icon { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }
}