import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { AdderComponent } from './adder/adder.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CounterComponent, AdderComponent],
  templateUrl: `./main.html`,
})
export class App {
  name = 'Eduardo';

}

bootstrapApplication(App);
