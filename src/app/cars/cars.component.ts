import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[app-cars]', // атрибут у дива в app.html
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {
    canAddCar = false;

    constructor() {
        setTimeout(() => {
            this.canAddCar = true;
        }, 4000)
    }
}
