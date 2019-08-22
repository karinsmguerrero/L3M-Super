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
    public class SchedulesController : ApiController
    {
        private string xmlPath = Constants.XML_PATH + "WeeklySchedule.xml";

        // GET: api/Schedules
        public IEnumerable<WorkWeek> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<WorkWeek>();
            XmlNodeList schedule = xml.DocumentElement.SelectNodes("/schedule/week");

            foreach (XmlNode week in schedule)
            {
                string startDay = week.Attributes["start"].Value;
                string endDay = week.Attributes["end"].Value;

                XmlNodeList employees = week.ChildNodes;

                foreach (XmlNode employee in employees)
                {
                    string name = employee.Attributes["name"].Value;
                    string hours = employee["hours"].InnerText;
                    string extras = employee["extras"].InnerText;
                    string branch = employee["branch"].InnerText;

                    list.Add(new WorkWeek()
                    {
                        StartDay = startDay,
                        EndDay = endDay,
                        Branch = branch,
                        EmployeeName = name,
                        Hours = hours,
                        ExtraHours = extras
                    });
                }
                                
            }

            return list;
        }

        // GET: api/Schedules/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Schedules
        public void Post([FromBody]WorkWeek value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNode schedule = xml.DocumentElement.SelectSingleNode("/schedule");

            XmlNode newWeek = xml.CreateElement("week");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("start");
            attribute.Value = value.StartDay;
            newWeek.Attributes.Append(attribute);

            attribute = xml.CreateAttribute("end");
            attribute.Value = value.EndDay;
            newWeek.Attributes.Append(attribute);

            XmlNode employee = xml.CreateElement("employee");
     
            attribute = xml.CreateAttribute("name");
            attribute.Value = value.EmployeeName;
            employee.Attributes.Append(attribute);

            // Create and append a child element for the description of the role.
            XmlNode hours = xml.CreateElement("hours");
            hours.InnerText = value.Hours;
            employee.AppendChild(hours);

            XmlNode extras = xml.CreateElement("extras");
            extras.InnerText = value.ExtraHours;
            employee.AppendChild(extras);

            XmlNode branch = xml.CreateElement("branch");
            branch.InnerText = value.Branch;
            employee.AppendChild(branch);

            newWeek.AppendChild(employee);
            schedule.AppendChild(newWeek);

            xml.Save(xmlPath);
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
