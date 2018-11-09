import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-cars]', // атрибут у дива в app.html
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    addCarStatus = false;
    carName = '';

    cars = ['Mers', 'MIstuba', 'somecar'];

    someitems = [
        {name:'да', id: 3},
        {name:'нет', id: 7},
        {name:'или', id: 9},
    ]

    constructor() {
    }

    addCar() {
        this.addCarStatus = true;
    }

}
