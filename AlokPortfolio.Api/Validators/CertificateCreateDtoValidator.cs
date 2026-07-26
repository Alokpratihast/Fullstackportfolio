using AlokPortfolio.Api.DTOs;
using FluentValidation;

namespace AlokPortfolio.Api.Validators;

public class CertificateCreateDtoValidator : AbstractValidator<CertificateCreateDto>
{
    public CertificateCreateDtoValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.Issuer)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.IssueDate)
            .NotEmpty();

        RuleFor(x => x.CredentialId)
            .MaximumLength(100);

        RuleFor(x => x.CredentialUrl)
            .MaximumLength(500);

        RuleFor(x => x.DisplayOrder)
            .GreaterThanOrEqualTo(0);
    }
}