using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class WorkWeek
    {
        public string EmployeeName { get; set; }
        public string StartDay { get; set; }
        public string EndDay { get; set; }
        public string Hours { get; set; }
        public string Branch { get; set; }
        public string ExtraHours { get; set; }
    }
}