using AlokPortfolio.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AlokPortfolio.Api.Configurations;

public class SkillConfiguration : IEntityTypeConfiguration<Skill>
{
    public void Configure(EntityTypeBuilder<Skill> builder)
    {
        builder.ToTable("Skills");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
               .IsRequired()
               .HasMaxLength(100);

        builder.Property(x => x.Category)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(x => x.Percentage)
               .IsRequired();

        builder.Property(x => x.DisplayOrder)
               .IsRequired();

        builder.Property(x => x.CreatedAt)
               .IsRequired();
    }
}