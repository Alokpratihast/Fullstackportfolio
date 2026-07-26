using AlokPortfolio.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AlokPortfolio.Api.Configurations;

public class ExperienceConfiguration : IEntityTypeConfiguration<Experience>
{
    public void Configure(EntityTypeBuilder<Experience> builder)
    {
        builder.ToTable("Experiences");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.CompanyName)
            .IsRequired()
            .HasMaxLength(150);

        builder.Property(x => x.JobTitle)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.EmploymentType)
            .HasMaxLength(50);

        builder.Property(x => x.Location)
            .HasMaxLength(100);

        builder.Property(x => x.Description)
            .HasMaxLength(2000);

        builder.Property(x => x.CreatedAt)
            .IsRequired();
    }
}