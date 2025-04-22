using Employee.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Employee.Api.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options)
        {
        }

        // Ensure the correct namespace and type are being used
        public DbSet<EmployeeData> EmployeeMaster { get; set; }
    }
}
