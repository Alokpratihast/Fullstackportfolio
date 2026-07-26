using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface ISocialLinkRepository
{
    Task<IEnumerable<SocialLink>> GetAllAsync();

    Task<SocialLink?> GetByIdAsync(int id);

    Task AddAsync(SocialLink socialLink);

    Task UpdateAsync(SocialLink socialLink);

    Task DeleteAsync(SocialLink socialLink);
}