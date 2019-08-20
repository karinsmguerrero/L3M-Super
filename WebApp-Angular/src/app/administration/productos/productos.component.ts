import { Component, OnInit } from '@angular/core';
import { ProductsManagmentService } from 'src/app/services/products-managment.service';
import { Product } from '../../models/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private service: ProductsManagmentService) { }

  ngOnInit() {
    this.service.getProducts();
    this.resetform();
  }

  populateForm(product: Product) {

  }

  resetform(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Name: "",
      Description: "",
      Id: null,
      Provider: "",
      Price: null,
      Tax: "",
      Discount: null,
      Quantity: null

    }
  }

  onSubmit(form: NgForm) {
    this.service.submitProduct(form.value).subscribe(res => {
      this.resetform(form);
      this.service.getProducts();
    });
  }

  onDelete(Id: string) {
    this.service.deleteProduct(Id).subscribe(res => {
      this.service.getProducts();
    });
  }

}
