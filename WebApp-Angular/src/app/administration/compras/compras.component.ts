import { Component, OnInit } from '@angular/core';
import { ShoppingManagmentService } from 'src/app/services/shopping-managment.service';
import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor( private service : ShoppingManagmentService) { }

  ngOnInit() {
    this.service.getShopping();
  }

  populateForm(purchase : Purchase){

  }

}
