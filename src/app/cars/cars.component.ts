import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: '[app-cars]',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
    cars: CarClass[] = [
        {name: 'Mers', year: 2017},
        {name: 'MIstuba', year: 2016},
        {name: 'somecar', year: 2015}
    ];

    updateCarList (car: CarClass){
        this.cars.push(car)
    }
}

export class CarClass {
    name: string;
    year: number;
}


