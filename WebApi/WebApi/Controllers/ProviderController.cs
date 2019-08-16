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
    public class ProviderController : ApiController
    {
        private string xmlPath = Constants.XML_PATH + "Administration.xml";

        // GET: api/Provider
        public IEnumerable<Provider> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Provider>();
            XmlNodeList providers = xml.DocumentElement.SelectNodes("/root/providers/provider");

            foreach (XmlNode provider in providers)
            {
                string id = provider.Attributes["id"].Value;
                string name = provider["name"].InnerText;
                list.Add(new Provider()
                {
                    Name = name,
                    Id = id
                });
            }

            return list;
        }

        // GET: api/Provider/5
        public Provider Get(int id)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Provider>();
            XmlNodeList Providers = xml.DocumentElement.SelectNodes("/root/providers/provider");
            Provider result = new Provider();

            foreach (XmlNode provider in Providers)
            {
                if (int.Parse(provider.Attributes["id"].Value) == id)
                {
                    result.Id = provider.Attributes["id"].Value;
                    result.Name = provider["name"].InnerText;
                    break;
                }

            }

            return result;
        }

        // POST: api/Provider
        public void Post([FromBody]Provider value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNode providers = xml.DocumentElement.SelectSingleNode("/root/providers");

            XmlNode newProvider = xml.CreateElement("provider");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("id");
            attribute.Value = value.Id;
            newProvider.Attributes.Append(attribute);


            // Create and append a child element for the description of the role.
            XmlNode name = xml.CreateElement("name");
            name.InnerText = value.Name;
            newProvider.AppendChild(name);

            providers.AppendChild(newProvider);
            xml.Save(xmlPath);
        }

        // PUT: api/Provider/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Provider/5
        public void Delete(int id)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNodeList providers = xml.DocumentElement.SelectNodes("/root/providers/provider");

            foreach (XmlNode provider in providers)
            {
                if (int.Parse(provider.Attributes["id"].Value) == id)
                {
                    xml.DocumentElement.SelectSingleNode("/root/providers").RemoveChild(provider);
                    break;
                }

            }
            xml.Save(xmlPath);
        }
    }
}
