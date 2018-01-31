using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vue2Spa.SQLObject;

namespace Vue2Spa.Controllers
{
    public class RoboContext : IdentityDbContext<User>
    {
        public DbSet<User> Userses { get; set;}
        public DbSet<Robot> Robots { get; set; }
        public DbSet<RobotEvent> RobotEvents { get; set; }
        public DbSet<RobotMatch> RobotMatch { get; set; }

        public RoboContext (DbContextOptions<RoboContext> options): base(options)
        {

        }
    }
}
