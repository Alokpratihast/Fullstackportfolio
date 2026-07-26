using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IContactMessageRepository
{
    Task<IEnumerable<ContactMessage>> GetAllAsync();

    Task<ContactMessage?> GetByIdAsync(int id);

    Task AddAsync(ContactMessage contactMessage);

    Task UpdateAsync(ContactMessage contactMessage);

    Task DeleteAsync(ContactMessage contactMessage);
}