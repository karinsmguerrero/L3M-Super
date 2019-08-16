import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  readonly rootURL = "http://localhost:59791/api";
  employeeList : Employee[];

  constructor(private http : HttpClient) { }

  submitEmployee(formData: Employee){
    return this.http.post(this.rootURL + '/Employee', formData);
  }

  getEmployee(){
    this.http.get(this.rootURL + '/Employee').toPromise().then(res => this.employeeList = res as Employee[]);
  }
}
