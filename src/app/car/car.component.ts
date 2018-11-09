import {Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';
import {CarClass} from "../cars/cars.component";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent{
    @Input() car: CarClass;
    @ContentChild('carHeading') carHeading: ElementRef;

    ngAfterViewInit(){
        console.log(this.carHeading)
    }
}
