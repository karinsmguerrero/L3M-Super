import { ProductsManagmentService } from 'src/app/services/products-managment.service';
import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-all-list',
  templateUrl: './product-all-list.component.html',
  styleUrls: ['./product-all-list.component.css']
})
export class ProductAllListComponent implements OnInit {

  productList : Product[];
  constructor( private service : ProductsManagmentService) { }

  ngOnInit() {
    this.service.getProducts();
  }

  populateForm(product : Product){

  }

}
