import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-cars]', // атрибут у дива в app.html
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    addCarStatus = false;
    carName = '';

    cars = [
        {name: 'Mers', year: 2017},
        {name: 'MIstuba', year: 2016},
        {name: 'somecar', year: 2015}
    ];

    someitems = [
        new Date(2018, 1, 1).toDateString(),
        new Date(2017, 2, 2).toDateString(),
        new Date(2016, 3, 3).toDateString(),
        new Date(2015, 4, 4).toDateString(),
        new Date(2014, 5, 5).toDateString(),
        new Date(2013, 6, 6).toDateString(),
    ];

    constructor() {
    }

    addCar() {
        this.addCarStatus = true;
    }

    setBigCarText(car: string) {
        return car.length > 4;
    }
}
