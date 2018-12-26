import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RCarsService {

    constructor() {
    }

    cars = [
        {
            name: 'Ford',
            id: 1,
            color: 'blue',
            year: 2017
        },
        {
            name: 'Audi',
            id: 2,
            color: 'yellow',
            year: 2016
        },
        {
            name: 'BMW',
            id: 3,
            color: 'red',
            year: 2018
        },
        {
            name: 'Mercedes',
            id: 4,
            color: 'grey',
            year: 2015
        }
    ]
}
