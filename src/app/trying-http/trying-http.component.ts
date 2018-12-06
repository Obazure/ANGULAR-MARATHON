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
    colors = ['red', 'green', 'blue', 'grey', 'yellow'];

    carName: string = '';

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
        this.carsService.addCar({name: this.carName, color: this.getRandColor()})
            .subscribe((car: Car) => {
                this.cars.push(car);
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
                console.log(car);
                this.cars.map((car_i, position) => {
                    if (car_i.id === car.id) {
                        this.cars[position] = car;
                    }
                });
            });
    }

    deleteCar(car: Car) {
        this.carsService.deleteCar(car)
            .subscribe((response) => {
                this.cars = this.cars.filter(c => c.id !== car.id);
            })
    }
}
