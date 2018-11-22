import {Injectable} from '@angular/core';
import {ConsoleService} from "../console-service/console.service";

@Injectable({
    providedIn: 'root'
})
export class CarsService {

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

    constructor(
        private consoleService: ConsoleService) {
    }

    addCar(name: string) {
        this.cars.push({isSold: false, name: name})
        this.consoleService.log(`Тачка ${name} добавилена!`);
    }
}
