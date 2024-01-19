using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
    {
        public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Inventory>Inventories  { get; set; }
        public DbSet<Other> Others { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<User> Users { get; set; }
    }
}