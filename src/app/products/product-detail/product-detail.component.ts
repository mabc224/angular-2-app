import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedProduct: Product;
  constructor() { }

  ngOnInit() {
  }

}
