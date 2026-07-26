using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;

namespace AlokPortfolio.Api.Services;

public class ContactMessageService : IContactMessageService
{
    private readonly IContactMessageRepository _repository;
    private readonly IMapper _mapper;

    public ContactMessageService(
        IContactMessageRepository repository,
        IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<ContactMessageResponseDto>> GetAllContactMessagesAsync()
    {
        var messages = await _repository.GetAllAsync();

        return _mapper.Map<IEnumerable<ContactMessageResponseDto>>(messages);
    }

    public async Task<ContactMessageResponseDto?> GetContactMessageByIdAsync(int id)
    {
        var message = await _repository.GetByIdAsync(id);

        if (message == null)
            return null;

        return _mapper.Map<ContactMessageResponseDto>(message);
    }

    public async Task<ContactMessageResponseDto> AddContactMessageAsync(ContactMessageCreateDto dto)
    {
        var message = _mapper.Map<ContactMessage>(dto);

        await _repository.AddAsync(message);

        return _mapper.Map<ContactMessageResponseDto>(message);
    }

    public async Task<bool> UpdateContactMessageAsync(int id, ContactMessageUpdateDto dto)
    {
        var message = await _repository.GetByIdAsync(id);

        if (message == null)
            return false;

        _mapper.Map(dto, message);

        await _repository.UpdateAsync(message);

        return true;
    }

    public async Task<bool> DeleteContactMessageAsync(int id)
    {
        var message = await _repository.GetByIdAsync(id);

        if (message == null)
            return false;

        await _repository.DeleteAsync(message);

        return true;
    }
}