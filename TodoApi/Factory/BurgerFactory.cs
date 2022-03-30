using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BurgerAPI{
    public class BurgerFactory{
        public IBurger returnInstance;

//factory pattern illustrated by switch statement
        public  IBurger getBurger(String burgerType)
        {
            switch(burgerType){

                case("plain"):
                returnInstance = new PlainBurger();
                break;
                case("cheese"):
                returnInstance = new CheeseBurger();
                break;
                case("chicken"):
                returnInstance = new ChickenBurger();
                break;
                case("gourmet"):
                returnInstance = new GourmetBurger();
                break;
                case("veggie"):
                returnInstance = new VeggieBurger();
                break;


            }
            return returnInstance;
        }
    }
}
