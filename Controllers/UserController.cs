using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Vue2Spa.SQLObject;
using Vue2Spa.ClientObject;
using Microsoft.AspNetCore.Authorization;

namespace Vue2Spa.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        private readonly RoboContext context;
        private readonly UserManager<User> userManager;
        private readonly ILogger logger;

        public UserController(UserManager<User> UM,ILoggerFactory loggerFactory, RoboContext roboContext)
        {
            userManager = UM;
            context = roboContext;
            logger = loggerFactory.CreateLogger("User");
        }

        [Route("Register")]
        [ActionName("Register")]
        [AllowAnonymous]
        [HttpPost]
        public HttpResponseMessage Register(RegstrationRequest obj)
        {
            User NewUser = new User()
            {
                FirstName = obj.firstName,
                LastName = obj.lastName,
                UserName = obj.username
            };
            userManager.CreateAsync(NewUser, obj.password).Wait();
            return new HttpResponseMessage(System.Net.HttpStatusCode.Accepted);
        }
    }
}
