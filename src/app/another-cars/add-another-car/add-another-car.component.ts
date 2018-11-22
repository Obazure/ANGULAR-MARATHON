import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-add-another-car',
    templateUrl: './add-another-car.component.html',
    styleUrls: ['./add-another-car.component.css']
})
export class AddAnotherCarComponent implements OnInit {

    @Output() onCarAdd = new EventEmitter<String>();
    carName = '';

    constructor() {
    }

    ngOnInit() {
    }


    addCar() {
        this.onCarAdd.emit(this.carName);
        this.carName = '';
    }

}
