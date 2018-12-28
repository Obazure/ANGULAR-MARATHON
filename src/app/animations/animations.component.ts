import {Component, OnInit} from '@angular/core';
import {divTrigger} from "./animations";


@Component({
    selector: 'app-animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [divTrigger]
})
export class AnimationsComponent implements OnInit {

    isVisible = true;

    constructor() {
    }

    ngOnInit() {
    }

    onAnimationStart(event: AnimationEvent) {
        console.log('Start: ', event);
    }

    onAnimationDone(event: AnimationEvent) {
        console.log('Done: ', event);
    }
}
