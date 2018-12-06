import {Component} from '@angular/core';
import {CarsService} from "./services/cars.service";

interface Car {
    name: string;
    color: string,
    id?: number
}

@Component({
    selector: 'app-trying-http',
    templateUrl: './trying-http.component.html',
    styleUrls: ['./trying-http.component.css']
})
export class TryingHttpComponent {

    cars: Car[] = [];

    carName: string = '';
    carColor: string = '';

    constructor(
        private carsService: CarsService,
    ) {
    }

    loadCars() {
        this.carsService.getCars().subscribe((response: Car[]) => {
            this.cars = response;
        });
    }


    addCar() {
    this.carsService.addCar({name: this.carName, color: this.carColor})
        .subscribe((response)=>{console.log(response)});
        this.carName = '';
        this.carColor = '';
    }
}
