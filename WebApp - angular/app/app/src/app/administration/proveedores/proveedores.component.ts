import { Component, OnInit } from '@angular/core';
import { ProviderManagmentService } from 'src/app/services/provider-managment.service';
import { Provider } from 'src/app/models/provider.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor( private service : ProviderManagmentService) { }

  ngOnInit() {
    this.service.getProviders();
    this.resetform();
  }

  populateForm(provider : Provider){

  }

  resetform(form?: NgForm) {
    if (form != null) 
      form.resetForm();
      this.service.formData = {
        Name: "",
        Id : null
      }
    }

    onSubmit(form: NgForm){
      this.service.submitProvider(form.value).subscribe(res => {
        this.resetform(form);
        this.service.getProviders();
      });
    }

    onDelete(Id : number){
      this.service.deleteProvider(Id).subscribe(res => {
        this.service.getProviders();
      });
    }

}
