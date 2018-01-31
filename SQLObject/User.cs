using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Vue2Spa.SQLObject
{
    public class User : Microsoft.AspNetCore.Identity.IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        //How many matches have been scouted
        public short Koolness { get; set; }
        public short Matches { get; set; }
        public short Teamnumber { get; set; }
    }
}
