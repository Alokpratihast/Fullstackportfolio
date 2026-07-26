using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class SkillUpdateDtoValidator : AbstractValidator<SkillUpdateDto>
{
    public SkillUpdateDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.Category)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Percentage)
            .InclusiveBetween(0, 100);

        RuleFor(x => x.DisplayOrder)
            .GreaterThanOrEqualTo(0);
    }
}