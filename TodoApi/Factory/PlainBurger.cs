using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BurgerAPI
{
public class PlainBurger : IBurger{
    public string getBun(){
        return "Wheat";
    }

    public string getPatty(){
        return "beef";
    }
}
}