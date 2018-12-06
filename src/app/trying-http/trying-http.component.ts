import {Component, OnInit} from '@angular/core';
import {CarsService} from "./services/cars.service";

interface Car {
    name: string;
    color: string,
    id: number
}

@Component({
    selector: 'app-trying-http',
    templateUrl: './trying-http.component.html',
    styleUrls: ['./trying-http.component.css']
})
export class TryingHttpComponent implements OnInit {

    cars: Car[] = [];

    constructor(
        private carsService: CarsService,
    ) {
    }

    ngOnInit() {
        this.carsService.getCars().subscribe((response: Car[]) => {
            this.cars = response;
        });
    }

}
