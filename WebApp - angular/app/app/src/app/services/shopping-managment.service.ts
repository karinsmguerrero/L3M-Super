import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../models/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingManagmentService {

  readonly rootURL = "http://localhost:59791/api";
  shoppingList : Purchase[];

  constructor(private http : HttpClient) { }

  submitPurchase(formData: Purchase){
    return this.http.post(this.rootURL + '/Purchase', formData);
  }

  getShopping(){
    this.http.get(this.rootURL + '/Purchase').toPromise().then(res => this.shoppingList = res as Purchase[]);
  }
}
