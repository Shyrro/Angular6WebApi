using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebAppApi.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class SampleDataController : ControllerBase {

        [Route ("all")]
        [HttpGet]
        public ActionResult<List<WeatherForecast>> GetAll () {
            var wf1 = new WeatherForecast { Summary = "Freezing" };
            var wf2 = new WeatherForecast { Summary = "Bracing" };

            var l = new List<WeatherForecast>();
            l.Add(wf1);
            l.Add(wf2);

            return l;
        }

        public class WeatherForecast {
            public string Summary { get; set; }
        }
    }
}