import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CarClass} from "../cars/cars.component";

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    @Output ('onAddCar') carEmitter = new EventEmitter<CarClass>();
    @ViewChild('carYearInput') carYearInput : ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    addCar(carNameEl) {
        this.carEmitter.emit({
            name: carNameEl.value,
            year: this.carYearInput.nativeElement.value
        });
        carNameEl.value = '';
        this.carYearInput.nativeElement.value = null;
    }

}
