using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;

namespace AlokPortfolio.Api.Services;

public class EducationService : IEducationService
{
    private readonly IEducationRepository _repository;
    private readonly IMapper _mapper;

    public EducationService(
        IEducationRepository repository,
        IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<EducationResponseDto>> GetAllEducationsAsync()
    {
        var educations = await _repository.GetAllAsync();

        return _mapper.Map<IEnumerable<EducationResponseDto>>(educations);
    }

    public async Task<EducationResponseDto?> GetEducationByIdAsync(int id)
    {
        var education = await _repository.GetByIdAsync(id);

        if (education == null)
            return null;

        return _mapper.Map<EducationResponseDto>(education);
    }

    public async Task<EducationResponseDto> AddEducationAsync(EducationCreateDto dto)
    {
        var education = _mapper.Map<Education>(dto);

        await _repository.AddAsync(education);

        return _mapper.Map<EducationResponseDto>(education);
    }

    public async Task<bool> UpdateEducationAsync(int id, EducationUpdateDto dto)
    {
        var education = await _repository.GetByIdAsync(id);

        if (education == null)
            return false;

        _mapper.Map(dto, education);

        await _repository.UpdateAsync(education);

        return true;
    }

    public async Task<bool> DeleteEducationAsync(int id)
    {
        var education = await _repository.GetByIdAsync(id);

        if (education == null)
            return false;

        await _repository.DeleteAsync(education);

        return true;
    }
}