import { Component, OnInit } from '@angular/core';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';
import { Employee } from 'src/app/models/employee.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})
export class PlanillaComponent implements OnInit {

  constructor( private service : EmployeeManagementService) { }

  ngOnInit() {
    this.service.getEmployee();
    this.resetform();
  }

  populateForm(employee : Employee){

  }

  resetform(form?: NgForm) {
    if (form != null) 
      form.resetForm();
      this.service.formData = {
        Name: "",
        Id:"",
        Hiring:"",
        Birth:"",
        Branch:"",
        Salary:""
      }
    }

    onSubmit(form: NgForm){
      this.service.submitEmployee(form.value).subscribe(res => {
        this.resetform(form);
        this.service.getEmployee();
      });
    }
}
