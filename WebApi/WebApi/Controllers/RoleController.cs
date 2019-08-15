using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class RoleController : ApiController
    {
        // GET: api/Role
        public IEnumerable<Role> Get()
        {
            var list = new List<Role>
            {
                new Role() { Name = "Administrador" , Description = "Lorem ipsum"},
                new Role() { Name = "Vendedor" , Description = "Lorem ipsum" },
                new Role() { Name = "Gerente" , Description = "Lorem ipsum" },
                new Role() { Name = "Cajero" , Description = "Lorem ipsum" }
            };
            return list;
        }

        // GET: api/Role/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Role
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Role/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Role/5
        public void Delete(int id)
        {
        }
    }
}
