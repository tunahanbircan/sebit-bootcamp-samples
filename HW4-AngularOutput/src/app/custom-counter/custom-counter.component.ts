import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-counter',
  template: `
    <div
      style="box-sizing: border-box; border: 1px solid black; text-align: center"
    >
      <span>First counter: </span>{{ this.counter }}
    </div>
    <button style="background-color: blue; margin: 10%" (click)="decrement()">
      -
    </button>
    <button style="background-color: blue; margin: 10%" (click)="increment()">
      +
    </button>
  `,
})
export class CustomCounterComponent {
  // this handles the counter from the parent component (../app.component.ts)
  @Input() counter: any;
  // this provides the means for use to update the value of the counter in the parent component (notice how the name of this emitter (counterChange) is the same as listed in ../app.component.html which triggers the myValueChange function in the parent component)
  @Output() counterChange = new EventEmitter();

  decrement() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
