import {Component, EventEmitter, OnInit} from '@angular/core';
import {CarsService} from "../cars-service/cars.service";

@Component({
    selector: 'app-add-another-car',
    templateUrl: './add-another-car.component.html',
    styleUrls: ['./add-another-car.component.css']
})
export class AddAnotherCarComponent implements OnInit {

    carName = '';

    constructor(private carService: CarsService) {
    }

    ngOnInit() {
    }


    addCar() {
        this.carService.addCar(this.carName);
        this.carName = '';
    }

}
