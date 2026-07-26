using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class ContactMessageUpdateDtoValidator : AbstractValidator<ContactMessageUpdateDto>
{
    public ContactMessageUpdateDtoValidator()
    {
        RuleFor(x => x.IsRead)
            .NotNull();
    }
}