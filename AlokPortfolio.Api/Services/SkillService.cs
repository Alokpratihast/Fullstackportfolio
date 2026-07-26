using AutoMapper;
using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;

namespace AlokPortfolio.Api.Services;

public class SkillService : ISkillService
{
    private readonly ISkillRepository _repository;
    private readonly IMapper _mapper;

    public SkillService(
        ISkillRepository repository,
        IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<SkillResponseDto>> GetAllSkillsAsync()
    {
        var skills = await _repository.GetAllAsync();

        return _mapper.Map<IEnumerable<SkillResponseDto>>(skills);
    }

    public async Task<SkillResponseDto?> GetSkillByIdAsync(int id)
    {
        var skill = await _repository.GetByIdAsync(id);

        if (skill == null)
            return null;

        return _mapper.Map<SkillResponseDto>(skill);
    }

    public async Task<SkillResponseDto> AddSkillAsync(SkillCreateDto dto)
    {
        var skill = _mapper.Map<Skill>(dto);

        await _repository.AddAsync(skill);

        return _mapper.Map<SkillResponseDto>(skill);
    }

    public async Task<bool> UpdateSkillAsync(int id, SkillUpdateDto dto)
    {
        var skill = await _repository.GetByIdAsync(id);

        if (skill == null)
            return false;

        _mapper.Map(dto, skill);

        await _repository.UpdateAsync(skill);

        return true;
    }

    public async Task<bool> DeleteSkillAsync(int id)
    {
        var skill = await _repository.GetByIdAsync(id);

        if (skill == null)
            return false;

        await _repository.DeleteAsync(skill);

        return true;
    }
}