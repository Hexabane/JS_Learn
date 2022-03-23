using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


public class VeggieBurger : IBurger{
     public string getBun(){
        return "Wheat";
    }

    public string getPatty(){
        return "ChickPea patty";
    }

     public string getBacon(){
        return "mayo";
    }
}
