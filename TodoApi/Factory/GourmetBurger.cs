using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BurgerAPI
{
    public class GourmetBurger : IBurger{
     public string getBun(){
        return "Rye";
    }

    public string getPatty(){
        return "beef";
    }

     public string getBacon(){
        return "bacon";
    }

    public string getMayo(){
        return "Mayo";
    }

     public string getLettuce(){
        return "lettuce";
    }

    public string getBbqSauce(){
        return "BBQ Sauce";
    }
}
}
