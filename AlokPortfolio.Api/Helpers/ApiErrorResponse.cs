namespace AlokPortfolio.Api.Helpers;

public class ApiErrorResponse
{
    public int StatusCode { get; set; }

    public string Message { get; set; } = string.Empty;
}