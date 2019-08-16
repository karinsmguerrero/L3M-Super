import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Provider } from '../models/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderManagmentService {
  readonly rootURL = "http://localhost:59791/api";
  providerList : Provider[];

  constructor(private http : HttpClient) { }

  submitProvider(formData: Provider){
    return this.http.post(this.rootURL + '/Provider', formData);
  }

  getProvider(){
    this.http.get(this.rootURL + '/Provider').toPromise().then(res => this.providerList = res as Provider[]);
  }
}
