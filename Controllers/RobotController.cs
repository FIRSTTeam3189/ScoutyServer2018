using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Vue2Spa.SQLObject;

namespace Vue2Spa.Controllers
{
  [Route("api/[Controller]")]
  public class RobotController : Controller
  {

    private readonly RoboContext context;
    private readonly ILogger logger;

    

    public RobotController(ILoggerFactory loggerFactory, RoboContext roboContext)
    {
      context = roboContext;
      logger = loggerFactory.CreateLogger("Robot");
    }

    [Route("GetRobot")]
    [ActionName("GetRobot")]
    [Authorize]
    [HttpGet]

    public Robot GetRobot(int teamNumber)
    {
      return context.Robots.FirstOrDefault<Robot>(a => a.TeamNumber == teamNumber);

    }

    [Route("GetRobots")]
    [ActionName("GetRobots")]
    [Authorize]
    [HttpGet]

    public List<Robot> GetRobots(List<int> teamNumbers)
    {
      return context.Robots.Where<Robot>(a => teamNumbers.Contains(a.TeamNumber)).ToList();
    }

    [Route("PutRobot")]
    [ActionName("PutRobot")]
    [Authorize]
    [HttpPost]

    public IActionResult PutRobot(Robot robot)
    {
      if (context.Robots.Any<Robot>(a => a.TeamNumber == robot.TeamNumber))
      {
        var old = context.Robots.FirstOrDefault<Robot>(a => a.TeamNumber == robot.TeamNumber);
        old.Auto = robot.Auto;
        old.BoxIntake = robot.BoxIntake;
        old.ClimbSpeed = robot.ClimbSpeed;
        old.CoOpClimb = robot.CoOpClimb;
        old.DriverXP = robot.DriverXP;
        old.Drivetrain = robot.Drivetrain;
        old.Matches = robot.Matches;
        old.Scoring_Types = robot.Scoring_Types;
        old.Scouter = robot.Scouter;
        old.Strategy = robot.Strategy;
      }else
      {
        context.Robots.Add(robot);
      }
      context.SaveChanges();
      return Ok();
    }





  }

}
