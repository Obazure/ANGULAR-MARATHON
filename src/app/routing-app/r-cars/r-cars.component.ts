import { Component, OnInit } from '@angular/core';
import {RCarsService} from "../services/r-cars.service";

@Component({
  selector: 'app-r-cars',
  templateUrl: './r-cars.component.html',
  styleUrls: ['./r-cars.component.css']
})
export class RCarsComponent implements OnInit {
    cars = [];

    constructor(private carsService: RCarsService) { }

    ngOnInit() {
        this.cars = this.carsService.cars;
    }
}
