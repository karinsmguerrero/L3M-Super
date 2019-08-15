using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class BillingsController : ApiController
    {
        // GET: api/Billings
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Billings/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Billings
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Billings/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Billings/5
        public void Delete(int id)
        {
        }
    }
}
