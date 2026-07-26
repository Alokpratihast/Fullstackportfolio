using AutoMapper;
using AlokPortfolio.Api.DTOs;
using AlokPortfolio.Api.Entities;

namespace AlokPortfolio.Api.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Project, ProjectResponseDto>();

        CreateMap<ProjectCreateDto, Project>();

        CreateMap<Project, ProjectCreateDto>();

        CreateMap<Skill, SkillResponseDto>();

        CreateMap<SkillCreateDto, Skill>();

        CreateMap<SkillUpdateDto, Skill>();

        CreateMap<Experience, ExperienceResponseDto>();

        CreateMap<ExperienceCreateDto, Experience>();

        CreateMap<ExperienceUpdateDto, Experience>();

        CreateMap<Education, EducationResponseDto>();

        CreateMap<EducationCreateDto, Education>();

        CreateMap<EducationUpdateDto, Education>();

        CreateMap<Certificate, CertificateResponseDto>();

        CreateMap<CertificateCreateDto, Certificate>();

        CreateMap<CertificateUpdateDto, Certificate>();

        CreateMap<ContactMessage, ContactMessageResponseDto>();

        CreateMap<ContactMessageCreateDto, ContactMessage>();

        CreateMap<ContactMessageUpdateDto, ContactMessage>();

        CreateMap<SocialLink, SocialLinkResponseDto>();

        CreateMap<SocialLinkCreateDto, SocialLink>();

        CreateMap<SocialLinkUpdateDto, SocialLink>();

        CreateMap<Resume, ResumeResponseDto>();
    }
}