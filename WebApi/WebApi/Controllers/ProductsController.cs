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
    public class ProductsController : ApiController
    {
        private string xmlPath = Constants.XML_PATH + "Products.xml";

        // GET: api/Products
        public IEnumerable<Product> Get()
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Product>();
            XmlNodeList products = xml.DocumentElement.SelectNodes("/products/product");

            foreach (XmlNode product in products)
            {
                string id = product.Attributes["id"].Value;
                string name = product["name"].InnerText;
                string description = product["description"].InnerText;
                string tax = product["tax"].InnerText;
                string price = product["price"].InnerText;
                list.Add(new Product()
                {
                    Name = name,
                    Id = id,
                    Description = description,
                    Tax = tax,
                    Price = price
                });
            }

            return list;
        }

        // GET: api/Products/5
        public Product Get(int product_id)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            var list = new List<Product>();
            XmlNodeList products = xml.DocumentElement.SelectNodes("/root/products/product");
            Product result = new Product();

            foreach (XmlNode product in products)
            {
                if (int.Parse(product.Attributes["id"].Value) == product_id)
                {
                    result.Id = product.Attributes["id"].Value;
                    result.Name = product["name"].InnerText;
                    result.Description = product["description"].InnerText;
                    result.Tax = product["tax"].InnerText;
                    result.Price = product["price"].InnerText;
                    break;
                }

            }

            return result;
        }

        // POST: api/Products
        public void Post([FromBody]Product value)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNode products = xml.DocumentElement.SelectSingleNode("/root/products");

            XmlNode newProduct = xml.CreateElement("product");

            // Create attributes for role and append them to the role element.
            XmlAttribute attribute = xml.CreateAttribute("id");
            attribute.Value = value.Id;
            newProduct.Attributes.Append(attribute);


            // Create and append a child element for the description of the role.
            XmlNode name = xml.CreateElement("name");
            name.InnerText = value.Name;
            newProduct.AppendChild(name);

            XmlNode description = xml.CreateElement("description");
            description.InnerText = value.Description;
            newProduct.AppendChild(description);

            XmlNode tax = xml.CreateElement("tax");
            tax.InnerText = value.Tax;
            newProduct.AppendChild(tax);

            XmlNode price = xml.CreateElement("price");
            price.InnerText = value.Price;
            newProduct.AppendChild(price);

            products.AppendChild(newProduct);
            xml.Save(xmlPath);
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(xmlPath);

            XmlNodeList products = xml.DocumentElement.SelectNodes("/root/products/product");

            foreach (XmlNode product in products)
            {
                if (int.Parse(product.Attributes["id"].Value) == id)
                {
                    xml.DocumentElement.SelectSingleNode("/root/products").RemoveChild(product);
                    break;
                }

            }
            xml.Save(xmlPath);
        }
    }
}
