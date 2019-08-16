using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Employee
    {
        public string Name { get; set; }
        public string Id { get; set; }
        public string Salary { get; set; }
        public string Birth { get; set; }
        public string Hiring { get; set; }
        public string Branch { get; set; }
    }
}