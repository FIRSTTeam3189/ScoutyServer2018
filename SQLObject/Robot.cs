using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Vue2Spa.SQLObject
{
   public enum CoOpClimb
    {
        None,
        ClimbOnMe,
        CLimbOnOthers,
        Both
    }
    public enum Scoring_Types
    {
        None,
        Vault,
        Scale,
        Switch,
        SwitchScale,
        SwitchVault,
        All
    }
    public enum DriverXP
    {
        None,
        Practice,
        Regional,
        Regionals,
        Championships
    }
    public class Robot
    {
        [Key]
        public short TeamNumber { get; set; }
        public IList<RobotMatch> Matches { get; set }
        public string Drivetrain { get; set; }
        public string BoxIntake { get; set; }
        public short ClimbSpeed { get; set; }
        public CoOpClimb CoOpClimb { get; set; }
        public string Auto { get; set; }
        public string strategy { get; set; }
        public Scoring_Types Scoring_Types { get; set; }
        public DriverXP DriverXP { get; set; }
        public User Scouter { get; set; }

    }
}
