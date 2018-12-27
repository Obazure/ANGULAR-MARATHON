import {animate, state, style, transition, trigger} from "@angular/animations";
import {timeInterval} from "rxjs/operators";


export const clickedP = trigger('clickedP', [
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
]);
export const multi = trigger('multi', [
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
]);

export const divTrigger = trigger('divTrigger', [
    state('hide', style({
        opacity: 0
    })),
    state('show', style({})),
    transition('void => show', [
        style({opacity: 0}),
        animate(500, style({
            opacity: 1
        }))
    ]),
    transition('show => void', [
        style({opacity: 1}),
        animate(500, style({
            opacity: 0
        }))
    ])
]);