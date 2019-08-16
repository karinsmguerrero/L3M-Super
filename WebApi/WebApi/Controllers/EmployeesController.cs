using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml;
using WebApi.Miscellaneous;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeesController : ApiController
    {
        private string xmlPath = Constants.XML_PATH + "Administration.xml";

        // GET: api/Employees
        public IEnumerable<Employee> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Employee>();
            XmlNodeList employees = xml.DocumentElement.SelectNodes("/root/employees/employee");

            foreach (XmlNode employee in employees)
            {
                string id = employee.Attributes["id"].Value;
                string name = employee["name"].InnerText;
                string birth = employee["birth-date"].InnerText;
                string hiring = employee["hire-date"].InnerText;
                string branch = employee["branch"].InnerText;
                string salary = employee["salary"].InnerText;
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
        public Employee Get(int employee_id)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Employee>();
            XmlNodeList employees = xml.DocumentElement.SelectNodes("/root/employees/employee");
            Employee result = new Employee();

            foreach (XmlNode employee in employees)
            {
                if(int.Parse(employee.Attributes["id"].Value) == employee_id)
                {
                    result.Id = employee.Attributes["id"].Value;
                    result.Name = employee["name"].InnerText;
                    result.Birth = employee["birth-date"].InnerText;
                    result.Hiring = employee["hire-date"].InnerText;
                    result.Branch  = employee["branch"].InnerText;
                    result.Salary = employee["salary"].InnerText;
                    break;
                }
                
            }

            return result;
        }

        // POST: api/Employees
        public void Post([FromBody]Employee value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNode employees = xml.DocumentElement.SelectSingleNode("/root/employees");

            XmlNode newEmployee = xml.CreateElement("employee");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("id");
            attribute.Value = value.Id;
            newEmployee.Attributes.Append(attribute);

          
            // Create and append a child element for the description of the role.
            XmlNode name = xml.CreateElement("name");
            name.InnerText = value.Name;
            newEmployee.AppendChild(name);

            XmlNode birth = xml.CreateElement("birth-date");
            birth.InnerText = value.Birth;
            newEmployee.AppendChild(birth);

            XmlNode hiring = xml.CreateElement("hire-date");
            hiring.InnerText = value.Hiring;
            newEmployee.AppendChild(hiring);

            XmlNode branch = xml.CreateElement("branch");
            branch.InnerText = value.Branch;
            newEmployee.AppendChild(branch);

            XmlNode salary = xml.CreateElement("salary");
            salary.InnerText = value.Salary;
            newEmployee.AppendChild(salary);

            employees.AppendChild(newEmployee);
            xml.Save(xmlPath);
        }

        // PUT: api/Employees/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Employees/5
        public void Delete(int id)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNodeList employees = xml.DocumentElement.SelectNodes("/root/employees/employee");

            foreach (XmlNode employee in employees)
            {
                if (int.Parse(employee.Attributes["id"].Value) == id)
                {
                    xml.DocumentElement.SelectSingleNode("/root/employees").RemoveChild(employee);
                    break;
                }

            }
            xml.Save(xmlPath);
        }
    }
}
