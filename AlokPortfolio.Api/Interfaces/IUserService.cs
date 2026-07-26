using AlokPortfolio.Api.DTOS;

namespace AlokPortfolio.Api.Interfaces;

public interface IUserService
{
    Task RegisterAsync(RegisterDto registerDto);

    Task<LoginResponseDto> LoginAsync(LoginDto loginDto);

    Task<IEnumerable<UserResponseDto>> GetAllUsersAsync();

    Task<UserResponseDto?> GetUserByIdAsync(int id);
}