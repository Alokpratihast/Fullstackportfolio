using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface ISkillService
{
    Task<IEnumerable<SkillResponseDto>> GetAllSkillsAsync();

    Task<SkillResponseDto?> GetSkillByIdAsync(int id);

    Task<SkillResponseDto> AddSkillAsync(SkillCreateDto dto);

    Task<bool> UpdateSkillAsync(int id, SkillUpdateDto dto);

    Task<bool> DeleteSkillAsync(int id);
}