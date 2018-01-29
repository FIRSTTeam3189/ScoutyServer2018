using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vue2Spa.SQLObject
{
    public enum RoboAction
    {
        Crossline,
        PlaceBoxSwitch,
        PlaceBoxScale,
        ScoreVault,
        CollectBox,
        DropBox,
        ClimbAttempt,
        Platform,
        ClimbOnBot,
        ClimbCompletion,
        ClimbedOn,
        Foul,
        TechFoul

    }
    public class RobotEvent
    {
        public RobotMatch Match { get; set; }
        public Robot Robot { get; set; }
        public RoboAction RoboAction { get; set; }
        public int Miliseconds { get; set; }
        public bool Teleop { get; set; }

    }
}
