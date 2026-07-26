using AlokPortfolio.Api.DTOs;

namespace AlokPortfolio.Api.Interfaces;

public interface IContactMessageService
{
    Task<IEnumerable<ContactMessageResponseDto>> GetAllContactMessagesAsync();

    Task<ContactMessageResponseDto?> GetContactMessageByIdAsync(int id);

    Task<ContactMessageResponseDto> AddContactMessageAsync(ContactMessageCreateDto dto);

    Task<bool> UpdateContactMessageAsync(int id, ContactMessageUpdateDto dto);

    Task<bool> DeleteContactMessageAsync(int id);
}