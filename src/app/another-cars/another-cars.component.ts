import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-cars',
  templateUrl: './another-cars.component.html',
  styleUrls: ['./another-cars.component.css']
})
export class AnotherCarsComponent implements OnInit {

    cars = [
        {
            name: 'Ford',
            isSold: false
        },
        {
            name: 'Mazda',
            isSold: true
        },
        {
            name: 'Mercedes',
            isSold: false
        }
    ];


    constructor() { }

    ngOnInit() {
    }
    addCarToList(carName: string) {
        this.cars.push({
            name: carName,
            isSold: false
        });
    }

}
