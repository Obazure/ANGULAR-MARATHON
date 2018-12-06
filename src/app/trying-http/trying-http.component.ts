import {Component, OnInit} from '@angular/core';
import {CarsService} from "./services/cars.service";

@Component({
    selector: 'app-trying-http',
    templateUrl: './trying-http.component.html',
    styleUrls: ['./trying-http.component.css']
})
export class TryingHttpComponent implements OnInit {

    cars = [];

    constructor(
        private carsService: CarsService,
    ) {
    }

    ngOnInit() {
        this.carsService.getCars()
            .subscribe((response)=>{
                console.log(response);
            });
    }

}
