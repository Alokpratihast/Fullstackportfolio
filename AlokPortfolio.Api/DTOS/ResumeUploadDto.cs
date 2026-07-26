using Microsoft.AspNetCore.Http;

namespace AlokPortfolio.Api.DTOs;

public class ResumeUploadDto
{
    public IFormFile File { get; set; } = default!;
}