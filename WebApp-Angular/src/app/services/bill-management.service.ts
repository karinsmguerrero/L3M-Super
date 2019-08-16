import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillManagementService {

  readonly rootURL = "http://localhost:59791/api";
  billList : Bill[];

  constructor(private http : HttpClient) { }

  submitRole(formData: Bill){
    return this.http.post(this.rootURL + '/Bill', formData);
  }

  getBill(){
    this.http.get(this.rootURL + '/Bill').toPromise().then(res => this.billList = res as Bill[]);
  }
}
