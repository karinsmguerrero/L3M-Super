import { Component, OnInit } from '@angular/core';
import { OfficceManagmentService } from 'src/app/services/officce-managment.service';
import { Officce } from 'src/app/models/officce.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor( private service : OfficceManagmentService) { }

  ngOnInit() {
    this.service.getOfficce();
    this.resetform();
  }

  populateForm(officce : Officce){

  }

  resetform(form?: NgForm) {
    if (form != null) 
      form.resetForm();
      this.service.formData = {
        Name: "",
        Address:"",
        Administrator:"",
        Phone:""
      }
    }

    onSubmit(form: NgForm){
      this.service.submitOfficce(form.value).subscribe(res => {
        this.resetform(form);
        this.service.getOfficce();
      });
    }

    onDelete(Name : string){
      
    }

}
