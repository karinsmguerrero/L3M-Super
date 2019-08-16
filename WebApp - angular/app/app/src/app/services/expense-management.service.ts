import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Expense } from '../models/expense.model';
@Injectable({
  providedIn: 'root'
})
export class ExpenseManagementService {
  readonly rootURL = "http://localhost:59791/api";
  expenseList : Expense[];

  constructor(private http : HttpClient) { }

  submitExpense(formData: Expense){
    return this.http.post(this.rootURL + '/Expense', formData);
  }

  getExpense(){
    this.http.get(this.rootURL + '/Expense').toPromise().then(res => this.expenseList = res as Expense[]);
  }
}
