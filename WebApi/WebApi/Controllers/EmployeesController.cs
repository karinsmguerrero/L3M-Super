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
            xml.Load("C:/Users/karin/Dropbox/TEC/2019/II semestre/Bases de datos/Tarea 1/WebApi/WebApi/Data/Administration.xml");

            var list = new List<Employee>();
            XmlNodeList employees = xml.DocumentElement.SelectNodes("/root/employees/employee");

            foreach (XmlNode employee in employees)
            {
                string id = employee.Attributes["id"].Value;
                string name = employee.InnerText;
                string birth = employee.InnerText;
                string hiring = employee.InnerText;
                string branch = employee.InnerText;
                string salary = employee.InnerText;
                list.Add(new Employee()
                {
                    Name = name,
                    Id = id,
                    Birth = birth,
                    Hiring = hiring,
                    Branch = branch,
                    Salary = salary
                });
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
