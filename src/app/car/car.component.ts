import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    isCarVisible: boolean;
    carName: string;

    constructor(
        private carService: CarService
    ) {
    }

    ngOnInit() {
        this.isCarVisible = this.carService.getVisibility()
        this.carService.getCarName().subscribe( carName=>this.carName=carName);
    }

}
