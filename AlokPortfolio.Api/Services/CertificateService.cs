using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;

namespace AlokPortfolio.Api.Services;

public class CertificateService : ICertificateService
{
    private readonly ICertificateRepository _repository;
    private readonly IMapper _mapper;

    public CertificateService(
        ICertificateRepository repository,
        IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<CertificateResponseDto>> GetAllCertificatesAsync()
    {
        var certificates = await _repository.GetAllAsync();

        return _mapper.Map<IEnumerable<CertificateResponseDto>>(certificates);
    }

    public async Task<CertificateResponseDto?> GetCertificateByIdAsync(int id)
    {
        var certificate = await _repository.GetByIdAsync(id);

        if (certificate == null)
            return null;

        return _mapper.Map<CertificateResponseDto>(certificate);
    }

    public async Task<CertificateResponseDto> AddCertificateAsync(CertificateCreateDto dto)
    {
        var certificate = _mapper.Map<Certificate>(dto);

        await _repository.AddAsync(certificate);

        return _mapper.Map<CertificateResponseDto>(certificate);
    }

    public async Task<bool> UpdateCertificateAsync(int id, CertificateUpdateDto dto)
    {
        var certificate = await _repository.GetByIdAsync(id);

        if (certificate == null)
            return false;

        _mapper.Map(dto, certificate);

        await _repository.UpdateAsync(certificate);

        return true;
    }

    public async Task<bool> DeleteCertificateAsync(int id)
    {
        var certificate = await _repository.GetByIdAsync(id);

        if (certificate == null)
            return false;

        await _repository.DeleteAsync(certificate);

        return true;
    }
}