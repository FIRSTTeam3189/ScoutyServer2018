using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Vue2Spa.SQLObject
{
    public class RobotMatch
    {
        public short TeamNumber { get; set; }
        [Key]
        public string Key { get; set; }
        public List<RobotEvent> Events { get; set; }
        public string Comments { get; set;  }
        public User Scouter { get; set; }
    
    }
}
