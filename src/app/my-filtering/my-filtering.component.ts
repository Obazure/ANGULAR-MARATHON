import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-filtering',
    templateUrl: './my-filtering.component.html',
    styleUrls: ['./my-filtering.component.css']
})
export class MyFilteringComponent implements OnInit {
    searchQueue = '';
    cars = [
        {name: 'Популярные Ford. Honda. Lada (ВАЗ) Mercedes-Benz.', description: 'some description'},
        {name: 'Японские Acura. Daihatsu. Datsun. Honda.', description: 'some description'},
        {name: 'Американские Buick. Cadillac. Chevrolet. Chrysler.', description: 'some description'},
        {name: 'Российские Aurus. Lada (ВАЗ) ГАЗ Москвич.', description: 'some description'},
        {name: 'Немецкие Mercedes-Benz. Opel. Porsche.', description: 'some description'},
        {name: 'Корейские Daewoo. Genesis. SsangYong.', description: 'some description'},
        {name: 'Европейские Alfa Romeo. Aston Martin. Bentley.', description: 'some description'},
        {name: 'Китайские Brilliance. BYD. Changan.', description: 'some description'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    addCar() {
        this.cars.push(
            {name: 'newCar', description: 'WTF;)'}
        )
    }

}
