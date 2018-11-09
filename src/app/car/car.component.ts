import {Component, Input} from '@angular/core';
import {CarClass} from "../cars/cars.component";

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent {
    @Input() carItem: CarClass;
}
