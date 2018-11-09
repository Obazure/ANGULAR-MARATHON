import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: '[app-cars]',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
    cars: CarClass[] = [
        {name: 'Mers', year: 2017}
    ];

    updateCarList(car: CarClass) {
        this.cars.push(car)
    }

    changeCarName() {
        this.cars[0].name = 'New Car Name';
    }
}

export class CarClass {
    name: string;
    year: number;
}


