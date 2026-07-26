using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class EducationUpdateDtoValidator : AbstractValidator<EducationUpdateDto>
{
    public EducationUpdateDtoValidator()
    {
        RuleFor(x => x.Degree)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.Institution)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.FieldOfStudy)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.StartDate)
            .NotEmpty();

        RuleFor(x => x.EndDate)
            .GreaterThanOrEqualTo(x => x.StartDate)
            .WithMessage("End Date must be greater than or equal to Start Date.");

        RuleFor(x => x.Grade)
            .MaximumLength(50);

        RuleFor(x => x.Description)
            .MaximumLength(2000);

        RuleFor(x => x.DisplayOrder)
            .GreaterThanOrEqualTo(0);
    }
}