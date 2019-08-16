import { Component, OnInit } from '@angular/core';
import { OfficceManagmentService } from 'src/app/services/officce-managment.service';
import { Officce } from 'src/app/models/officce.model';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor( private service : OfficceManagmentService) { }

  ngOnInit() {
    this.service.getOfficce();
  }

  populateForm(officce : Officce){

  }

}
