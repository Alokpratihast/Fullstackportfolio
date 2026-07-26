using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Interfaces;

public interface IJwtService
{
    string GenerateToken(User user);
}