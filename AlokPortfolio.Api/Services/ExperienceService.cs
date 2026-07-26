using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;

namespace AlokPortfolio.Api.Services;

public class ExperienceService : IExperienceService
{
    private readonly IExperienceRepository _repository;
    private readonly IMapper _mapper;

    public ExperienceService(
        IExperienceRepository repository,
        IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<ExperienceResponseDto>> GetAllExperiencesAsync()
    {
        var experiences = await _repository.GetAllAsync();

        return _mapper.Map<IEnumerable<ExperienceResponseDto>>(experiences);
    }

    public async Task<ExperienceResponseDto?> GetExperienceByIdAsync(int id)
    {
        var experience = await _repository.GetByIdAsync(id);

        if (experience == null)
            return null;

        return _mapper.Map<ExperienceResponseDto>(experience);
    }

    public async Task<ExperienceResponseDto> AddExperienceAsync(ExperienceCreateDto dto)
    {
        var experience = _mapper.Map<Experience>(dto);

        await _repository.AddAsync(experience);

        return _mapper.Map<ExperienceResponseDto>(experience);
    }

    public async Task<bool> UpdateExperienceAsync(int id, ExperienceUpdateDto dto)
    {
        var experience = await _repository.GetByIdAsync(id);

        if (experience == null)
            return false;

        _mapper.Map(dto, experience);

        await _repository.UpdateAsync(experience);

        return true;
    }

    public async Task<bool> DeleteExperienceAsync(int id)
    {
        var experience = await _repository.GetByIdAsync(id);

        if (experience == null)
            return false;

        await _repository.DeleteAsync(experience);

        return true;
    }
}