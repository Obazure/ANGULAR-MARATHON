import { Component, OnInit } from '@angular/core';
import {CarsService} from "./cars-service/cars.service";

@Component({
  selector: 'app-another-cars',
  templateUrl: './another-cars.component.html',
  styleUrls: ['./another-cars.component.css']
})
export class AnotherCarsComponent implements OnInit {

    cars = [];

    constructor(private carService: CarsService) { }

    ngOnInit() {
        this.cars = this.carService.cars;
    }

}
