import {Component, Input} from '@angular/core';
import {ConsoleService} from "../console-service/console.service";

@Component({
  selector: 'app-another-car',
  templateUrl: './another-car.component.html',
  styleUrls: ['./another-car.component.css']
})
export class AnotherCarComponent {
    @Input() car;

    constructor(private consoleService: ConsoleService) {}

    getClass() {
        return {
            'list-group-item-success': !this.car.isSold,
            'list-group-item-danger': this.car.isSold,
            'list-group-item': true
        }
    }

    onAction(type: string) {
        this.car.isSold = type === 'buy' ? true : false;
        this.consoleService.log(`${this.car.name} status = ${type}`);
    }
}
