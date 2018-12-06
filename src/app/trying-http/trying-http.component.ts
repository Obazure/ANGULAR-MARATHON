import {Component, OnInit} from '@angular/core';
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
export class TryingHttpComponent implements OnInit {

    cars;
    appTitle;

    colors = ['red', 'green', 'blue', 'grey', 'yellow'];
    carName: string = '';

    constructor(
        private carsService: CarsService,
    ) {
    }

    ngOnInit() {
        this.appTitle = this.carsService.getAppTitle();
        this.loadCars();
    }

    loadCars() {
        this.cars = this.carsService.getCars();
    }


    addCar() {
        this.carsService.addCar({name: this.carName, color: this.getRandColor()})
            .subscribe((car: Car) => {
                this.loadCars()
            });
        this.carName = '';
    }

    getRandColor() {
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }

    setNewColor(car: Car) {
        car.color = this.getRandColor();
        this.carsService.changeColor(car)
            .subscribe((car: Car) => {
                this.loadCars()
            });
    }

    deleteCar(car: Car) {
        this.carsService.deleteCar(car)
            .subscribe(response => {
                    this.loadCars()
                },
                err => alert(err),
            )
    }
}
