import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number;

  increment(){
    this.counter ++;
  }

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {}
}