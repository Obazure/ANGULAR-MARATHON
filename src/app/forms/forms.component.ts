import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

    @ViewChild('form') form: NgForm;

    formData = {};
    isSubmitted = false;

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

    submitForm() {
        this.isSubmitted = true;
        this.formData = this.form.value;
        this.form.reset();
    }

    addRandomEmail() {
        const randEmail = 'wasdawdasd@gmail.com';
        // this.form.setValue({
        //     user: {email: randEmail, pass: ''},
        //     country: '',
        //     answer: ''
        // })
        this.form.form.patchValue({
            user: {email: randEmail}
        });
    }
}
