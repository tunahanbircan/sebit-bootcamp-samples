import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HW4-AngularOutput';
  counterValue: number;

  constructor() {
    this.counterValue = 0;
  }

  myValueChange(newCount: number) {
    console.log(newCount);
  }
}
