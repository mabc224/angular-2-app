import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from './../product';
import { ProductsItemComponent } from './products-item.component'

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  directives: [ ProductsItemComponent ]

})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  product = new Product('Dummy', 'Dummy Desc', 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg')
  @Output() productSelected = new EventEmitter<Product>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(prodctsItem: Product){
    this.productSelected.emit(prodctsItem);
  }

}
