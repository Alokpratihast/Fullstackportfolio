namespace AlokPortfolio.Api.Entities;

public class SocialLink
{
    public int Id { get; set; }

    public string Platform { get; set; } = string.Empty;

    public string Url { get; set; } = string.Empty;

    public string Icon { get; set; } = string.Empty;

    public int DisplayOrder { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}