import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-cars]', // атрибут у дива в app.html
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    addCarStatus = false;
    carName = '';

    constructor() {
    }

    addCar() {
        this.addCarStatus = true;
    }

}
