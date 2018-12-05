import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    charsCount = 5;

    ngOnInit() {
        this.form = new FormGroup({
            user: new FormGroup({
                email: new FormControl('',
                    [Validators.required, Validators.email],
                    this.checkForEmail),
                pass: new FormControl('',
                    [Validators.required, this.checkForLength.bind(this)]),
            }),
            country: new FormControl('ru'),
            answer: new FormControl('no')
        });
    }

    onSubmit() {
        console.log('Submited!', this.form);
    }

    checkForLength(control: FormControl) {
        if (control.value.length <= this.charsCount) {
            return {
                lengthError: true
            }
        } else {
            return null;
        }
    }

    checkForEmail(control: FormControl): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                    if (control.value === 'test@mail.ru') {
                        resolve({emailIsUsed: true})
                    } else {
                        return null;
                    }
                }
                , 3000)
        })
    }
}
