using Microsoft.AspNetCore.Http;

namespace AlokPortfolio.Api.DTOs;

public class ResumeUpdateDto
{
    public IFormFile File { get; set; } = default!;
}