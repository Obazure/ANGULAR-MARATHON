import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
    styles: [`
        .form-control.ng-invalid.ng-touched {
            border: 1px solid red;
        }
        .form-control.ng-valid.ng-touched {
            border: 1px solid green;
        }
    `]
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
