import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-componen-tlife-cycle',
  templateUrl: 'componentlifecycle.component.html',
  styleUrls: ['componentlifecycle.component.css']
})
export class ComponentlifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  constructor() {
    this.log('ComponentlifecycleComponent constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  private log(hook: string){
    console.log(hook);
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

}
