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
    public class BranchController : ApiController
    {
        private string xmlPath = Constants.XML_PATH + "Administration.xml";

        // GET: api/Branch
        public IEnumerable<Branch> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Branch>();
            XmlNodeList branches = xml.DocumentElement.SelectNodes("/root/branches/branch");

            foreach (XmlNode branch in branches)
            {
                string name = branch.Attributes["name"].Value;
                string adress = branch["adress"].InnerText;
                string phone = branch["phone"].InnerText;
                string administrator = branch["administrator"].InnerText;
                list.Add(new Branch()
                {
                    Name = name,
                    Address = adress,
                    Phone = phone,
                    Administrator = administrator
                });
            }

            return list;
        }

        // GET: api/Branch/5
        public Branch Get(string name)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Branch>();
            XmlNodeList branches = xml.DocumentElement.SelectNodes("/root/branches/branch");
            Branch result = new Branch();

            foreach (XmlNode branch in branches)
            {
                if (branch.Attributes["name"].Value == name)
                {
                    
                    result.Name = branch.Attributes["name"].Value;
                    result.Address = branch["adress"].InnerText;
                    result.Phone = branch["phone"].InnerText;
                    result.Administrator = branch["administrator"].InnerText;
                    break;
                }

            }

            return result;
        }

        // POST: api/Branch
        public void Post([FromBody]Branch value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNode branches = xml.DocumentElement.SelectSingleNode("/root/branches");

            XmlNode newBranch = xml.CreateElement("branch");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("name");
            attribute.Value = value.Name;
            newBranch.Attributes.Append(attribute);


            // Create and append a child element for the description of the role.
            XmlNode adress = xml.CreateElement("adress");
            adress.InnerText = value.Address;
            newBranch.AppendChild(adress);

            XmlNode ohone = xml.CreateElement("phone");
            ohone.InnerText = value.Phone;
            newBranch.AppendChild(ohone);

            XmlNode administrator = xml.CreateElement("administrator");
            administrator.InnerText = value.Administrator;
            newBranch.AppendChild(administrator);

            branches.AppendChild(newBranch);
            xml.Save(xmlPath);
        }

        // PUT: api/Branch/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Branch/5
        public void Delete(string name)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNodeList branches = xml.DocumentElement.SelectNodes("/root/branches/branch");

            foreach (XmlNode branch in branches)
            {
                if (branch.Attributes["name"].Value == name)
                {
                    xml.DocumentElement.SelectSingleNode("/root/branches").RemoveChild(branch);
                    break;
                }

            }
            xml.Save(xmlPath);
        }
    }
}
