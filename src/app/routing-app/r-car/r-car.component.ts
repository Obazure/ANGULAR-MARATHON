import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RCarsService} from "../services/r-cars.service";

@Component({
    selector: 'app-r-car',
    templateUrl: './r-car.component.html',
    styleUrls: ['./r-car.component.css']
})
export class RCarComponent implements OnInit {

    id: number;
    carName: string;

    constructor(
        private route: ActivatedRoute,
        private rCarsService: RCarsService
    ) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.carName = this.route.snapshot.params['carName'];

        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.carName = params['carName'];
        })
    }

}
