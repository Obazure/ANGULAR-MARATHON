import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-cars]', // атрибут у дива в app.html
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    addCarStatus = false;
    carName = '';

    cars = ['Mers', 'MIstuba', 'somecar', 'someanother'];


    constructor() {
    }

    addCar() {
        this.addCarStatus = true;
    }

    setBigCarText(car: string) {
        return car.length > 4 ? true : false;
    }
}
