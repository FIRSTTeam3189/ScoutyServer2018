using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vue2Spa.ClientObject
{
    public class LoginInfo
    {
        public string MobileServiceAuthenticationToken { get; set; }
        public ClientUser UserInfo { get; set; }
    }
}
