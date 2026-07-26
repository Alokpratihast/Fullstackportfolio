using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;
using AlokPortfolio.Api.Interfaces;
using AutoMapper;

namespace AlokPortfolio.Api.Services;

public class SocialLinkService : ISocialLinkService
{
    private readonly ISocialLinkRepository _repository;
    private readonly IMapper _mapper;

    public SocialLinkService(
        ISocialLinkRepository repository,
        IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<SocialLinkResponseDto>> GetAllSocialLinksAsync()
    {
        var links = await _repository.GetAllAsync();
        return _mapper.Map<IEnumerable<SocialLinkResponseDto>>(links);
    }

    public async Task<SocialLinkResponseDto?> GetSocialLinkByIdAsync(int id)
    {
        var link = await _repository.GetByIdAsync(id);

        if (link == null)
            return null;

        return _mapper.Map<SocialLinkResponseDto>(link);
    }

    public async Task<SocialLinkResponseDto> AddSocialLinkAsync(SocialLinkCreateDto dto)
    {
        var link = _mapper.Map<SocialLink>(dto);

        await _repository.AddAsync(link);

        return _mapper.Map<SocialLinkResponseDto>(link);
    }

    public async Task<bool> UpdateSocialLinkAsync(int id, SocialLinkUpdateDto dto)
    {
        var link = await _repository.GetByIdAsync(id);

        if (link == null)
            return false;

        _mapper.Map(dto, link);

        await _repository.UpdateAsync(link);

        return true;
    }

    public async Task<bool> DeleteSocialLinkAsync(int id)
    {
        var link = await _repository.GetByIdAsync(id);

        if (link == null)
            return false;

        await _repository.DeleteAsync(link);

        return true;
    }
}