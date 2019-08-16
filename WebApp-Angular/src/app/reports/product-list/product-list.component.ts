import { Component, OnInit } from '@angular/core';
import { ProductsManagmentService } from 'src/app/services/products-managment.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  readonly rootURL = "http://localhost:59791/api";
  productList : Product[];
  constructor( private service : ProductsManagmentService) { }

  ngOnInit() {
    this.service.getProducts();
  }

  populateForm(product : Product){

  }


}
