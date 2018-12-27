import {Component, OnInit} from '@angular/core';
import {clickedP, divTrigger, multi} from "./animations";


@Component({
    selector: 'app-animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [clickedP, multi, divTrigger]
})
export class AnimationsComponent implements OnInit {

    state = 'start';
    multistate = 'start';
    isVisible = true;

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
