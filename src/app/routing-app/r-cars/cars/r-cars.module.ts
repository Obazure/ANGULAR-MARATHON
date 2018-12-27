import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RCarsComponent} from "../r-cars.component";
import {RCarsService} from "../../services/r-cars.service";
import {RCarComponent} from "../../r-car/r-car.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CarsRoutingModule} from "./cars-routing.module";
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
    declarations: [
        RCarsComponent,
        RCarComponent
    ],
    providers: [RCarsService],
    imports: [
        CommonModule,
        CarsRoutingModule,
        DirectivesModule
    ]
})
export class RCarsModule {
}
