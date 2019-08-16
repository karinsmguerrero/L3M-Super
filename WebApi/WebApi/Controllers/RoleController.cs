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
    public class RoleController : ApiController
    {
        // GET: api/Role
        public IEnumerable<Role> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load("C:/Users/karin/Dropbox/TEC/2019/II semestre/Bases de datos/Tarea 1/WebApi/WebApi/Data/Administration.xml");
            var list = new List<Role>();

            XmlNodeList roles = xml.DocumentElement.SelectNodes("/root/roles/role");
            
            foreach (XmlNode role in roles)
            {
                string name = role.Attributes["name"].Value;
                string description = role.InnerText;
                list.Add(new Role()
                {
                    Name = name,
                    Description = description
                });
            }

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
        public void Put([FromBody]Role value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load("C:/Users/karin/Dropbox/TEC/2019/II semestre/Bases de datos/Tarea 1/WebApi/WebApi/Data/Administration.xml");

            XmlNode roles = xml.DocumentElement.SelectSingleNode("/root/roles");

            // Create a new role element.
            XmlElement role = xml.CreateElement("role");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("name");
            attribute.Value = value.Name;
            role.Attributes.Append(attribute);

            // Create and append a child element for the description of the role.
            XmlElement description = xml.CreateElement("description");
            description.InnerText = value.Description;
            role.AppendChild(description);

            roles.AppendChild(role);

        }


        // DELETE: api/Role/5
        public void Delete(int id)
        {
        }
    }
}
