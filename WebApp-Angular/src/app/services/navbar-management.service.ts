import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Nav } from '../models/nav.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarManagementService {

  constructor(private http : HttpClient) { }

  getNav(){
   
  }
}
