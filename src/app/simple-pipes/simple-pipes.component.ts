import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-pipes',
    templateUrl: './simple-pipes.component.html',
    styleUrls: ['./simple-pipes.component.css']
})
export class SimplePipesComponent implements OnInit {

    name = 'Some text is Here';
    pi = Math.PI;
    money = 234;
    date = new Date();
    amount = 0.451;
    object = {
        foo: 'foo',
        bar: 'bar',
        nested:
            {
                xyz: 3,
                numbers: [1, 2, 3]
            }
    };


    constructor() {
    }

    ngOnInit() {
    }


}
