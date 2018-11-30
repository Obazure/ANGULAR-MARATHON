import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import { Block4Component } from './block4/block4.component';
import { DirectiveFirstDirective } from './block4/directives/directive-first.directive';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';
import { MyPipesTestComponent } from './my-pipes-test/my-pipes-test.component';
import { DateWithUtcPipe } from './my-pipes-test/pipes/date-with-utc.pipe';
import { MyFilteringComponent } from './my-filtering/my-filtering.component';
import { CarFilteringPipe } from './my-filtering/pipes/car-filtering.pipe';
import { AnotherCarsComponent } from './another-cars/another-cars.component';
import { AddAnotherCarComponent } from './another-cars/add-another-car/add-another-car.component';
import { AnotherCarComponent } from './another-cars/another-car/another-car.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    Block4Component,
    DirectiveFirstDirective,
    SimplePipesComponent,
    MyPipesTestComponent,
    DateWithUtcPipe,
    MyFilteringComponent,
    CarFilteringPipe,
    AnotherCarsComponent,
    AddAnotherCarComponent,
    AnotherCarComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
