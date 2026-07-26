using AlokPortfolio.Api.Data;
using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Repositories;

public class DashboardRepository : IDashboardRepository
{
    private readonly ApplicationDbContext _context;

    public DashboardRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<DashboardSummaryDto> GetDashboardSummaryAsync()
    {
        return new DashboardSummaryDto
        {
            TotalProjects = await _context.Projects.CountAsync(),
            TotalSkills = await _context.Skills.CountAsync(),
            TotalExperiences = await _context.Experiences.CountAsync(),
            TotalEducations = await _context.Educations.CountAsync(),
            TotalCertificates = await _context.Certificates.CountAsync(),
            TotalSocialLinks = await _context.SocialLinks.CountAsync(),
            TotalMessages = await _context.ContactMessages.CountAsync(),
            HasActiveResume = await _context.Resumes.AnyAsync(r => r.IsActive)
        };
    }

    public async Task<DashboardResponseDto> GetDashboardDataAsync()
    {
        var summary = await GetDashboardSummaryAsync();

        var recentMessages = await _context.ContactMessages
            .OrderByDescending(x => x.CreatedAt)
            .Take(5)
            .Select(x => new RecentMessageDto
            {
                Id = x.Id,
                Name = x.Name,
                Email = x.Email,
                Subject = x.Subject,
                IsRead = x.IsRead,
                CreatedAt = x.CreatedAt
            })
            .ToListAsync();

        var recentProjects = await _context.Projects
            .OrderByDescending(x => x.CreatedAt)
            .Take(5)
            .Select(x => new RecentProjectDto
            {
                Id = x.Id,
                Title = x.Title,
                Technologies = x.Technologies,
                IsFeatured = x.IsFeatured,
                CreatedAt = x.CreatedAt
            })
            .ToListAsync();

        return new DashboardResponseDto
        {
            Summary = summary,
            RecentMessages = recentMessages,
            RecentProjects = recentProjects
        };
    }
}