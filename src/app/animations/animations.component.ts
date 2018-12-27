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
            state('active', style({
                backgroundColor: 'yellow',
                width: '170px',
                height: '170px'
            })),
            transition('start <=> end', animate('1000ms ease-in')),
            transition('start => active', animate(400)),
            transition('active => end', animate(400))
        ]),
        trigger('multi',[
            state('start', style({
                backgroundColor: 'blue',
                width: '150px',
                height: '150px',
                border: '5px solid black'
            })),
            state('end', style({
                backgroundColor: 'red',
                width: '170px',
                height: '170px',
            })),
            transition('start <=> end',
                [
                    style({
                        backgroundColor: 'yellow'
                    }),
                    animate(1500, style({
                        backgroundColor: 'green'
                    })),
                    animate(1000)
                ])
        ])
    ]
})
export class AnimationsComponent implements OnInit {

    state = 'start';
    multistate = 'start';

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
