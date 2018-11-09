import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CarClass} from "../cars/cars.component";

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carName: string = '';
    carYear: number = 2018;
    @Output ('onAddCar') carEmitter = new EventEmitter<CarClass>();

    constructor() {
    }

    ngOnInit() {
    }

    addCar() {
        this.carEmitter.emit({
            name: this.carName,
            year: this.carYear
        });
        this.carName = '';
        this.carYear = 2018;
    }

}
