import { Component, OnInit } from '@angular/core';
import { ProductsManagmentService } from 'src/app/services/products-managment.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor( private service : ProductsManagmentService) { }

  ngOnInit() {
    //this.service.getProducts();
  }

  populateForm(product : Product){

  }

}
