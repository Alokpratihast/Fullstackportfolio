using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class ResumeUploadDtoValidator : AbstractValidator<ResumeUploadDto>
{
    public ResumeUploadDtoValidator()
    {
        RuleFor(x => x.File)
            .Cascade(CascadeMode.Stop)
            .NotNull()
            .Must(file => file.Length > 0)
            .WithMessage("Please select a file.")
            .Must(file => file.Length <= 5 * 1024 * 1024)
            .WithMessage("Maximum file size is 5 MB.")
            .Must(file => Path.GetExtension(file.FileName).Equals(".pdf", StringComparison.OrdinalIgnoreCase))
            .WithMessage("Only PDF files are allowed.")
            .Must(file => file.ContentType.Equals("application/pdf", StringComparison.OrdinalIgnoreCase))
            .WithMessage("Only PDF files are allowed.");
    }
}
