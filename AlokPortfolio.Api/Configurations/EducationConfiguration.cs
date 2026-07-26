using AlokPortfolio.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AlokPortfolio.Api.Configurations;

public class EducationConfiguration : IEntityTypeConfiguration<Education>
{
    public void Configure(EntityTypeBuilder<Education> builder)
    {
        builder.ToTable("Educations");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Degree)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.Institution)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(x => x.FieldOfStudy)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.Grade)
            .HasMaxLength(50);

        builder.Property(x => x.Description)
            .HasMaxLength(2000);

        builder.Property(x => x.DisplayOrder)
            .IsRequired();

        builder.Property(x => x.CreatedAt)
            .IsRequired();
    }
}