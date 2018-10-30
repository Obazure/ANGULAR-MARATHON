import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `<h3>Somecar</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos natus optio vitae voluptates. Mollitia?</p>`,
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
