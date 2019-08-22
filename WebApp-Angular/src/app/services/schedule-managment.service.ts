import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { Schedule } from '../models/schedule.model';


@Injectable({
  providedIn: 'root'
})
export class ScheduleManagmentService {

  readonly rootURL = "http://localhost:59791/api";
  scheduleList : Schedule[];
  formData:Schedule;

  constructor(private http : HttpClient) { }

  submitSchedule(formData: Schedule){
    formData.ExtraHours = formData.Hours - 48;
    return this.http.post(this.rootURL + '/Schedules', formData);
  }

  getSchedule(){
    this.http.get(this.rootURL + '/Schedules').toPromise().then(res => this.scheduleList = res as Schedule[]);
  }
}
