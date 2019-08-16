import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleManagmentService {
  readonly rootURL = "http://localhost:59791/api";
  scheduleList : Schedule[];

  constructor(private http : HttpClient) { }

  submitSchedule(formData: Schedule){
    return this.http.post(this.rootURL + '/Schedule', formData);
  }

  getSchedule(){
    this.http.get(this.rootURL + '/Schedule').toPromise().then(res => this.scheduleList = res as Schedule[]);
  }
}
