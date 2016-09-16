import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product';

@Component({
  moduleId: module.id,
  selector: 'app-products-item',
  templateUrl: 'products-item.component.html',
  styles: []
})
export class ProductsItemComponent implements OnInit {

  @Input() product: Product;
  productId: number;

  constructor() { }

  ngOnInit() {
  }

}
