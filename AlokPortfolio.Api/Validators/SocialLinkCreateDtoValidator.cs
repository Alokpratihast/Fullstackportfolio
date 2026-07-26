using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class SocialLinkCreateDtoValidator : AbstractValidator<SocialLinkCreateDto>
{
    public SocialLinkCreateDtoValidator()
    {
        RuleFor(x => x.Platform)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.Url)
            .NotEmpty()
            .MaximumLength(500)
            .Must(uri => Uri.TryCreate(uri, UriKind.Absolute, out _))
            .WithMessage("Please enter a valid URL.");

        RuleFor(x => x.Icon)
            .MaximumLength(100);

        RuleFor(x => x.DisplayOrder)
            .GreaterThanOrEqualTo(0);
    }
}