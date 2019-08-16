import { Component, OnInit } from '@angular/core';
import { ScheduleManagmentService } from 'src/app/services/schedule-managment.service';
import { Schedule } from '../../models/schedule.model';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  constructor( private service : ScheduleManagmentService) { }

  ngOnInit() {
    this.service.getSchedule();
  }

  populateForm(schedule : Schedule){

  }

}
