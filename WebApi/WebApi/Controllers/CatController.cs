using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using System.Xml;

namespace WebApi.Controllers
{
    public class CatController : ApiController
    {
        [HttpGet]
        public IEnumerable<Cat> GetAll()
        {
            XmlDocument xml = new XmlDocument();
             xml.Load("C:/Users/karin/source/repos/WebApi/WebApi/Data/cat_register.xml");
             var list = new List<Cat>();

             foreach (XmlNode node in xml.DocumentElement)
             {

                 string name = node.FirstChild.InnerText;

                 list.Add(new Cat() { Name = name });
             }

             return list;
            /*
            var list = new List<Cat>
            {
                new Cat() { Name = "Lilly" },
                new Cat() { Name = "Lucy" },
                new Cat() { Name = "oreo" },
                new Cat() { Name = "cereza" },
                new Cat() { Name = "manchas" },
                new Cat() { Name = "federico" }
            };
            return list;
            */
        }

        [HttpGet]
        public Cat Get(string name)
        {
            return new Cat() { Name = name };
        }

        [HttpPost]
        public Cat Insert([FromBody]Cat cat)
        {
            // write the new cat to database

            return cat;
        }

        [HttpPut]
        public Cat Update(string name, [FromBody]Cat cat)
        {
            cat.Name = name;
            // write the updated cat to database
            return cat;
        }

        [HttpDelete]
        public void Delete(string name)
        {
            // delete the cat from the database

        }

        // POST: api/Cat
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Cat/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cat/5
        public void Delete(int id)
        {
        }
    }
}
