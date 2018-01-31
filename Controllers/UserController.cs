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
using IdentityModel.Client;

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
        public HttpResponseMessage Register([FromBody]RegstrationRequest obj)
        {
            User NewUser = new User()
            {
                FirstName = obj.FirstName,
                LastName = obj.LastName,
                UserName = obj.Username
            };
            userManager.CreateAsync(NewUser, obj.Password).Wait();
            return new HttpResponseMessage(System.Net.HttpStatusCode.Accepted);
        }
        [Route("Login")]
        [ActionName("Login")]
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginRequest obj)
        {
            //check to see if the data sent to us is valid
            if (ModelState.IsValid)
            {
                //create client for discovering stuff on the sql server
                var disco = await DiscoveryClient.GetAsync(Config.HOST);
                //create object that help us keep track on tokens and stores them in the sql server
                var tokenClient = new TokenClient(disco.TokenEndpoint, "ro.client", Config.SECRET);
                //attempts to login an get a token for the user to use for staying logged in.
                var tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync(obj.Username, obj.Password, "api");
                //if the password or username are wrong it fails
                if (tokenResponse.IsError) {
                    logger.LogError(tokenResponse.Error);
                    return BadRequest("Incorrect username or password, dumbass");
                }
                //if it didnt fail send thhe token to the user.
                return Json(tokenResponse.Json);
                //Psycho Billy is the most LEeT genre
                //"Its the...state of the model...." -Dev
            }

            return BadRequest("Invalid Model");

        }
        
    }
}
