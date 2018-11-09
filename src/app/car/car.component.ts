import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild, DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {CarClass} from "../cars/cars.component";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit {
    @Input() car: CarClass;
    @Input() name: string;
    @ContentChild('carHeading') carHeading: ElementRef;

    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges', changes);
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit')
    }

    ngDoCheck(): void {
        console.log('DoCheck')
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit')
    }
}
