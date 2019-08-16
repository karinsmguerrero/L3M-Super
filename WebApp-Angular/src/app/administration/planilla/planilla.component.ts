import { Component, OnInit } from '@angular/core';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})
export class PlanillaComponent implements OnInit {

  constructor( private service : EmployeeManagementService) { }

  ngOnInit() {
    this.service.getEmployee();
  }

  populateForm(employee : Employee){

  }
}
