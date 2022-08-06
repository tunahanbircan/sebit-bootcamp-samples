import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  money: string = '';
  height: number = 0;
  weight: number = 0;

  OnWeightChange(value: string) {
    this.weight = parseFloat(value);
  }

  OnNameChange(value: string) {
    this.name = value;
  }

  OnDateChange(value: string) {
    this.date = value;
  }

  OnMoneyChange(value: string) {
    this.money = value;
  }

  OnHeightChange(value: string) {
    this.height = parseFloat(value);
  }
}
