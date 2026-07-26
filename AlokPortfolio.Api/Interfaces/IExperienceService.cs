using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface IExperienceService
{
    Task<IEnumerable<ExperienceResponseDto>> GetAllExperiencesAsync();

    Task<ExperienceResponseDto?> GetExperienceByIdAsync(int id);

    Task<ExperienceResponseDto> AddExperienceAsync(ExperienceCreateDto dto);

    Task<bool> UpdateExperienceAsync(int id, ExperienceUpdateDto dto);

    Task<bool> DeleteExperienceAsync(int id);
}