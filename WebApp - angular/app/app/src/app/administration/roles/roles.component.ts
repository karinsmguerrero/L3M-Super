import { Component, OnInit } from '@angular/core';
import { RoleManagementService } from 'src/app/services/role-management.service';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor( private service : RoleManagementService) { }

  ngOnInit() {
    this.service.getRoles();
  }

  populateForm(role : Role){

  }
}
