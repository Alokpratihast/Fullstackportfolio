using FluentValidation;
using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Validators;

public class ProjectCreateDtoValidator : AbstractValidator<ProjectCreateDto>
{
    public ProjectCreateDtoValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Title is required.")
            .MinimumLength(5).WithMessage("Title must be at least 5 characters.")
            .MaximumLength(100).WithMessage("Title cannot exceed 100 characters.");

        RuleFor(x => x.Description)
            .NotEmpty().WithMessage("Description is required.")
            .MinimumLength(20).WithMessage("Description must be at least 20 characters.");

        RuleFor(x => x.GithubUrl)
            .NotEmpty().WithMessage("Github URL is required.")
            .Must(uri => Uri.TryCreate(uri, UriKind.Absolute, out _))
            .WithMessage("Please enter a valid Github URL.");

        RuleFor(x => x.LiveUrl)
            .NotEmpty().WithMessage("Live URL is required.")
            .Must(uri => Uri.TryCreate(uri, UriKind.Absolute, out _))
            .WithMessage("Please enter a valid Live URL.");
    }
}