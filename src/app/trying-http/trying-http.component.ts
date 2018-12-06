import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-trying-http',
    templateUrl: './trying-http.component.html',
    styleUrls: ['./trying-http.component.css']
})
export class TryingHttpComponent implements OnInit {

    cars = [
        {
            name: 'Ford',
            color: 'white',
            id: 1
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
