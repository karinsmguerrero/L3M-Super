import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Role } from '../models/role.model';


@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  readonly rootURL = "http://localhost:59791/api";
  roleList : Role[];
  formData: Role;

  constructor(private http : HttpClient) { }

  submitRole(formData: Role){
    alert("submiting");
    return this.http.post(this.rootURL + '/Role', formData);
  }

  getRoles(){
    this.http.get(this.rootURL + '/Role').toPromise().then(res => this.roleList = res as Role[]);
  }

  
}
