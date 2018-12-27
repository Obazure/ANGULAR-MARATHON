import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {timeInterval} from "rxjs/operators";

@Component({
    selector: 'app-animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [
        trigger('clickedP', [
            state('start', style({
                backgroundColor: 'blue',
                width: '150px',
                height: '150px'
            })),
            state('end', style({
                backgroundColor: 'red',
                width: '300px',
                height: '300px'
            })),
            transition('start => end', animate(1000)),
            transition('end => start', animate('800ms 0.5s ease-out'))
        ])
    ]
})
export class AnimationsComponent implements OnInit {

    state = 'start';

    constructor() {
    }

    ngOnInit() {
    }

    changeState() {
        this.state = 'end';
        setTimeout(() => {
            this.state = 'start';
        }, 3000);
    }

}
