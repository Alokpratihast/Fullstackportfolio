using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class ContactMessageCreateDtoValidator : AbstractValidator<ContactMessageCreateDto>
{
    public ContactMessageCreateDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(150);

        RuleFor(x => x.Subject)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.Message)
            .NotEmpty()
            .MaximumLength(2000);
    }
}