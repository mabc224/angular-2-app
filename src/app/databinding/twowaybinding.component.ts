import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-twoway-binding',
  template: `
    <input type="text" [(ngModel)]="person.name"/>
  `,
  styles: [],
  inputs: []
})
export class TwowaybindingComponent{

  person = {
    name: 'arsalan',
    age: 20
  }

}
