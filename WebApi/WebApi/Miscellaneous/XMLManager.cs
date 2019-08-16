using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace WebApi.Miscellaneous
{
    public class XMLManager
    {
        private XmlDocument xml;

        public XMLManager(string name)
        {
            xml = new XmlDocument();
            xml.Load("~/Data/" + name);
           
        }
        public XmlNode GetNode(string uniqueAttribute, string name)
        {
            XmlNamespaceManager nsmgr = new XmlNamespaceManager(xml.NameTable);
            string xPathString = "/Administration";
            XmlNode xmlNode = xml.DocumentElement.SelectSingleNode(xPathString);
            return xmlNode;
        }
    }
}