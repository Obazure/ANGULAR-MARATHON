import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RCarsService} from "../services/r-cars.service";

@Component({
    selector: 'app-r-car',
    templateUrl: './r-car.component.html',
    styleUrls: ['./r-car.component.css']
})
export class RCarComponent implements OnInit {

    id: number;
    carName: string;
    color: string;
    year: string;
    hash: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private rCarsService: RCarsService
    ) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.carName = this.route.snapshot.params['carName'];
        this.color = this.route.snapshot.queryParams['color'];
        this.year = this.route.snapshot.queryParams['year'];
        this.hash = this.route.snapshot.fragment;

        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.carName = params['carName'];
        });

        this.route.queryParams.subscribe((params: Params) => {
            this.color = params['color'];
            this.year = params['year'];
        });

        this.route.fragment.subscribe((hash) => {
            this.hash = hash;
        });

    }

    openMazda() {
        this.router.navigate(['/cars', 100, 'Zazda'], {
            queryParams: {year: '3010', color: 'green'},
            fragment: 'asdqwepic'
        });
    }

}
