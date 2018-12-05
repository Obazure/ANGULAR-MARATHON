import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    defaultAnswer = 'no';
    defaultCountry = 'ru';

    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    submitForm(form: HTMLFormElement) {
        console.log(form);
    }
}
