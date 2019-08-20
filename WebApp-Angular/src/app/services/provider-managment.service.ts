import { Injectable } from '@angular/core';
import { Provider } from '../models/provider.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderManagmentService {

  readonly rootURL = "http://localhost:59791/api";
  providerList: Provider[];
  formData: Provider;

  constructor(private http: HttpClient) { }

  submitProvider(formData: Provider) {
    return this.http.post(this.rootURL + '/Provider', formData);
  }

  getProviders() {
    this.http.get(this.rootURL + '/Provider').toPromise().then(res => this.providerList = res as Provider[]);
  }

  deleteProvider(Id: string) {
    return this.http.delete(this.rootURL + '/Provider/' + Id);
  }
}
