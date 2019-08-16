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
    public class RoleController : ApiController
    {
        private string xmlPath = Constants.XML_PATH + "Administration.xml";
        // GET: api/Role
        public IEnumerable<Role> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);
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
        public void Post([FromBody]Role value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNode roles = xml.DocumentElement.SelectSingleNode("/root/roles");

            XmlNode newRole = xml.CreateElement("role");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("name");
            attribute.Value = value.Name;
            newRole.Attributes.Append(attribute);

            // Create and append a child element for the description of the role.
            XmlNode description = xml.CreateElement("description");
            description.InnerText = value.Description;
            newRole.AppendChild(description);

            roles.AppendChild(newRole);
            xml.Save(xmlPath);
        }

        // PUT: api/Role/5
        public void Put([FromBody]Role value)
        {
           

        }


        // DELETE: api/Role/5
        public void Delete(string name)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNodeList roles = xml.DocumentElement.SelectNodes("/root/roles/role");

            foreach(XmlNode role in roles)
            {
                if (role.Attributes["name"].Value == name)
                {
                    xml.DocumentElement.SelectSingleNode("/root/roles").RemoveChild(role);
                    break;
                }

            }
            xml.Save(xmlPath);
        }
    }
}
