using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface ICertificateService
{
    Task<IEnumerable<CertificateResponseDto>> GetAllCertificatesAsync();

    Task<CertificateResponseDto?> GetCertificateByIdAsync(int id);

    Task<CertificateResponseDto> AddCertificateAsync(CertificateCreateDto dto);

    Task<bool> UpdateCertificateAsync(int id, CertificateUpdateDto dto);

    Task<bool> DeleteCertificateAsync(int id);
}