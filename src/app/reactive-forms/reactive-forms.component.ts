import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(''),
            pass: new FormControl(''),
            country: new FormControl('ru'),
            answer: new FormControl('no')
        });
    }

    onSubmit() {
        console.log('Submited!', this.form);
    }
}
