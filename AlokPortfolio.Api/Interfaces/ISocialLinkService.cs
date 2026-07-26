using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface ISocialLinkService
{
    Task<IEnumerable<SocialLinkResponseDto>> GetAllSocialLinksAsync();

    Task<SocialLinkResponseDto?> GetSocialLinkByIdAsync(int id);

    Task<SocialLinkResponseDto> AddSocialLinkAsync(SocialLinkCreateDto dto);

    Task<bool> UpdateSocialLinkAsync(int id, SocialLinkUpdateDto dto);

    Task<bool> DeleteSocialLinkAsync(int id);
}