namespace AlokPortfolio.Api.Helpers;

public class ValidationErrorResponse
{
    public bool Success { get; set; }

    public string Message { get; set; } = string.Empty;

    public List<string> Errors { get; set; } = new();
}