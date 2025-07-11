using Library.API.Entities;
using Library.API.Enums;
using Microsoft.EntityFrameworkCore;

namespace Library.API.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<BookCategory> BookCategories { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Order> Orders { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base (options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    FirstName = "Admin",
                    LastName = "",
                    Email = "admin@gmail.com",
                    MobileNumber = "1234567890",
                    AccountStatus = AccountStatus.ACTIVE,
                    UserType = UserType.ADMIN,
                    Password = "admin1999",
                    CreatedOn = new DateTime(2023, 11, 01, 13, 28, 12)
                }
            );

            modelBuilder.Entity<BookCategory>().HasData(
                new BookCategory
                {
                    Id=1,
                    Category="Computer", SubCategory ="algorithm"
                },
                new BookCategory
                {
                    Id=2,
                    Category="Computer", SubCategory = "programming"
                }
             );
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<UserType>().HaveConversion<string>();
            configurationBuilder.Properties<AccountStatus>().HaveConversion<string>();
        }











    }
}
