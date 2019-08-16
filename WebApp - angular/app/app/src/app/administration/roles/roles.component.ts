import { Component, OnInit } from '@angular/core';
import { RoleManagementService } from 'src/app/services/role-management.service';
import { Role } from 'src/app/models/role.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor( private service : RoleManagementService) { }

  ngOnInit() {
    this.service.getRoles();
    this.resetform();
  }

  populateForm(role : Role){

  }

  resetform(form?: NgForm) {
    if (form != null) 
      form.resetForm();
      this.service.formData = {
        Name: "",
        Description :""
      }
    }

    onSubmit(form: NgForm){
      this.service.submitRole(form.value).subscribe(res => {
        this.resetform(form);
        this.service.getRoles();
      });
    }

    
}
