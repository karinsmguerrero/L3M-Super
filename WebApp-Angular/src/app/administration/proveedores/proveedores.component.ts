import { Component, OnInit } from '@angular/core';
import { ProviderManagmentService } from 'src/app/services/provider-managment.service';
import { Provider } from 'src/app/models/provider.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor( private service : ProviderManagmentService) { }

  ngOnInit() {
    this.service.getProvider();
  }

  populateForm(provider : Provider){

  }

}
