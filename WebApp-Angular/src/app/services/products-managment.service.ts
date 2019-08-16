import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsManagmentService {

  readonly rootURL = "http://localhost:59791/api";
  productList : Product[];

  constructor(private http : HttpClient) { }

  submitProduct(formData: Product){
    return this.http.post(this.rootURL + '/Product', formData);
  }

  getProducts(){
    this.http.get(this.rootURL + '/Product').toPromise().then(res => this.productList = res as Product[]);
  }
}
