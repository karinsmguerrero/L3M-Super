import { Component, OnInit } from '@angular/core';
import { ProductsManagmentService } from 'src/app/services/products-managment.service';
import { Product } from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  sucursal = '';
  readonly rootURL = "http://localhost:59791/api";
  productList : Product[];
  constructor( private service : ProductsManagmentService, 
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.service.getProducts();
    this.sucursal= this.route.snapshot.params.sucursal;//Revisar.params
    console.log(this.route.root.toString);

  }

  populateForm(product : Product){

  }


}
