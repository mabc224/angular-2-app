import { Component } from '@angular/core';
import { PropertybindingComponent } from './propertybinding.component'
import { EventbindingComponent } from './eventbinding.component'
import { TwowaybindingComponent } from './twowaybinding.component'

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertybindingComponent, EventbindingComponent, TwowaybindingComponent]
})
export class DatabindingComponent {
  stringInterpolation = "this is string interpolation"
  numberInterpolation = 2

  onTest(){
    return true
  }

  onClickedButton(value: string) {
    alert(value)
  }

}
