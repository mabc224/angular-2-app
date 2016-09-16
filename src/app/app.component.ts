import { Component } from '@angular/core';
import { HeaderComponent, FooterComponent } from './header-footer-main';
import { ProductsComponent } from './products'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent, FooterComponent, ProductsComponent ]
})

export class AppComponent {
  title = 'Root Component';
}
