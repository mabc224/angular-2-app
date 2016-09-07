import { Component } from '@angular/core';
import { ComponentlifecycleComponent } from './componentlifecycle'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ComponentlifecycleComponent ]
})

export class AppComponent {
  title = 'Root Component';
  delete = false;
  test = "starting value"
  boundable = 1000;
}
