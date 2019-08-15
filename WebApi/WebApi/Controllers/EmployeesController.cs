using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeesController : ApiController
    {
        // GET: api/Employees
        public IEnumerable<Employee> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load("~/Data/Administration.xml");
            XmlNode root = xml.FirstChild;
            string xPathString = "/employees";
            XmlElement Employees = (XmlElement)xml.DocumentElement.SelectSingleNode(xPathString);
            
            var list = new List<Employee>();

            foreach (XmlElement node in Employees.ChildNodes)
            {
                string id = node.GetAttributeNode("id").InnerXml;
                string name = node["name"].InnerText;

                list.Add(new Employee() { Name = name });
            }

            return list;
        }

        // GET: api/Employees/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Employees
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Employees/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Employees/5
        public void Delete(int id)
        {
        }
    }
}
