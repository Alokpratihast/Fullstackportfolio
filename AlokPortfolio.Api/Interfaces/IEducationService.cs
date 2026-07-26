using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface IEducationService
{
    Task<IEnumerable<EducationResponseDto>> GetAllEducationsAsync();

    Task<EducationResponseDto?> GetEducationByIdAsync(int id);

    Task<EducationResponseDto> AddEducationAsync(EducationCreateDto dto);

    Task<bool> UpdateEducationAsync(int id, EducationUpdateDto dto);

    Task<bool> DeleteEducationAsync(int id);
}