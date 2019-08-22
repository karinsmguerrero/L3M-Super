import { Component, OnInit } from '@angular/core';
import { ScheduleManagmentService } from 'src/app/services/schedule-managment.service';
import { Schedule } from '../../models/schedule.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  constructor( private service : ScheduleManagmentService) { }

  ngOnInit() {
    this.service.getSchedule();
    this.resetform();
  }

  populateForm(schedule : Schedule){

  }

  resetform(form?: NgForm) {
    if (form != null) 
      form.resetForm();
      this.service.formData = {
        EmployeeName: "",
        StartDay:"",
        EndDay:"",
        Hours:null,
        ExtraHours:null,
        Branch:""
      }
    }

    onSubmit(form: NgForm){
      this.service.submitSchedule(form.value).subscribe(res => {
        this.resetform(form);
        this.service.getSchedule();
      });
    }


}
