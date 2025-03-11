using Microsoft.EntityFrameworkCore;

using Microsoft.EntityFrameworkCore;
using WebApplication1.Modelos;

namespace WebApplication1.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Formulario>()
        //        .HasOne(f => f.Id)
        //        .WithMany();

        //}
        public DbSet<Formulario> Formulario { get; set; }
    }
}
