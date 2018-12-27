import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorDirective} from "./color.directive";

@NgModule({
    declarations: [
        ColorDirective
    ],
    exports: [
        ColorDirective
    ]
})
export class DirectivesModule {
}
