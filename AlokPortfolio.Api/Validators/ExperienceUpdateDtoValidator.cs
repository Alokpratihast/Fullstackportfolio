using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class ExperienceUpdateDtoValidator : AbstractValidator<ExperienceUpdateDto>
{
    public ExperienceUpdateDtoValidator()
    {
        RuleFor(x => x.CompanyName)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.JobTitle)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.EmploymentType)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Location)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.StartDate)
            .NotEmpty();

        RuleFor(x => x.Description)
            .MaximumLength(2000);

        RuleFor(x => x.DisplayOrder)
            .GreaterThanOrEqualTo(0);

        RuleFor(x => x)
            .Must(x => x.IsCurrentJob || x.EndDate.HasValue)
            .WithMessage("End Date is required if this is not the current job.");
    }
}