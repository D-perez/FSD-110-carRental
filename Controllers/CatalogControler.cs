using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace carRental.Controllers
{
        public class CatalogController: Controller
        {
            private DataContext dbContext;
            public CatalogController(DataContext context)//injecting a db connection
            {
                this.dbContext = context;
            }
            
            public IActionResult Index()
            {
                return View(); //catalog page
            }
            public IActionResult Register()
            {
                return View(); //register page
            }

            [HttpGet]
            public IActionResult GetCatalog()
            {
                //read the table
                //send it back as a json
                var list = dbContext.CarsTable.ToList(); // read all the table (list of car objs)
                return Json(list); // send it back as a json list
            }

            [HttpPost]
            public IActionResult RegisterCar([FromBody] Car theCar)
            {
                System.Console.WriteLine("User is saving a car");
                
                dbContext.CarsTable.Add(theCar);
                dbContext.SaveChanges();

                return Json(theCar); // return Json obj
            }

        }
}