import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Officce } from '../models/officce.model';

@Injectable({
  providedIn: 'root'
})
export class OfficceManagmentService {

  readonly rootURL = "http://localhost:59791/api";
  officceList : Officce[];

  constructor(private http : HttpClient) { }

  submitOfficce(formData: Officce){
    return this.http.post(this.rootURL + '/Branch', formData);
  }

  getOfficce(){
    this.http.get(this.rootURL + '/Branch').toPromise().then(res => this.officceList = res as Officce[]);
  }
}
