using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class SchedulesController : ApiController
    {
        // GET: api/Schedules
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Schedules/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Schedules
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Schedules/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Schedules/5
        public void Delete(int id)
        {
        }
    }
}
