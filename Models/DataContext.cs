using Microsoft.EntityFrameworkCore;

/*

this class will handle connection to db 
help to create/register/update/delete CRUD
for the models that you specify
*/

public class DataContext : DbContext
{

    //class constructor recieves connection info
    //and passes it to the parent
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Car> CarsTable {get; set;}

}