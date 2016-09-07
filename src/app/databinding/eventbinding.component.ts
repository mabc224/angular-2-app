import { Component, EventEmitter, Output } from '@angular/core';
// import EventEmitter = NodeJS.EventEmitter;

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)="onClickButton()">
      Click me darling!!
    </button>
    <button (click)="onClickedButton()">
      Click me custom event darling!!
    </button>
  `,
  styles: []
})
export class EventbindingComponent {

  @Output() clicked = new EventEmitter<string>();
  //
  onClickButton() {
    alert('Wow! you click me!')
  }

  onClickedButton() {
    this.clicked.emit('Wow! you click me again for emitting event!')
  }

}
