import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertybindingComponent {

  @Input() result: number = 0;

}
