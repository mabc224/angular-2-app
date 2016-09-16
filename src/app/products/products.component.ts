import { Component, OnInit } from '@angular/core';
import { ProductsListComponent } from './products-list'
import { ProductDetailComponent } from './product-detail'
import { Product } from './product';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  directives: [ProductsListComponent, ProductDetailComponent]
})
export class ProductsComponent implements OnInit {

  selectedProduct: Product;

  constructor() { }

  ngOnInit() {
  }

}
