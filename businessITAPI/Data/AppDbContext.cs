using Microsoft.EntityFrameworkCore;
using businessITAPI.Models;

namespace businessITAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Servicio> Servicios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.ToTable("cliente");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.NombreCliente).HasColumnName("nombre_cliente");
                entity.Property(e => e.Correo).HasColumnName("correo");
            });

            modelBuilder.Entity<Servicio>(entity =>
            {
                entity.ToTable("servicio");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.NombreServicio).HasColumnName("nombre_servicio");
                entity.Property(e => e.Descripcion).HasColumnName("descripcion");
            });
        }
    }
}