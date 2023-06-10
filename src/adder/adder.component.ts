import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adder',
  standalone: true,
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'],
  imports: [FormsModule]
})
export class AdderComponent implements OnInit {
  n1: number;
  n2: number;

  sum(){
    return this.n1 + this.n2;
  }
  constructor() {
    this.n1 = this.n2 = 2;
  }

  ngOnInit() {
  }

}