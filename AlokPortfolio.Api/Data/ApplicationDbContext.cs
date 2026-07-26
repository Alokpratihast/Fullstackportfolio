using AlokPortfolio.Api.Configurations;
using AlokPortfolio.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace AlokPortfolio.Api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<User> Users { get; set; }

    public DbSet<Skill> Skills { get; set; }

    public DbSet<Experience> Experiences { get; set; }

    public DbSet<Education> Educations { get; set; }

    public DbSet<Certificate> Certificates { get; set; }

    public DbSet<ContactMessage> ContactMessages { get; set; }

    public DbSet<SocialLink> SocialLinks { get; set; }

    public DbSet<Resume> Resumes { get; set; }




    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        modelBuilder.ApplyConfiguration(new CertificateConfiguration());
        modelBuilder.ApplyConfiguration(new ContactMessageConfiguration());
        modelBuilder.ApplyConfiguration(new SocialLinkConfiguration());
        modelBuilder.ApplyConfiguration(new ResumeConfiguration());
    }
}