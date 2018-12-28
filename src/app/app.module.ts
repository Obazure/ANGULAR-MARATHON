import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddCarComponent} from './add-car/add-car.component';
import {Block4Component} from './block4/block4.component';
import {DirectiveFirstDirective} from './block4/directives/directive-first.directive';
import {SimplePipesComponent} from './simple-pipes/simple-pipes.component';
import {MyPipesTestComponent} from './my-pipes-test/my-pipes-test.component';
import {DateWithUtcPipe} from './my-pipes-test/pipes/date-with-utc.pipe';
import {MyFilteringComponent} from './my-filtering/my-filtering.component';
import {CarFilteringPipe} from './my-filtering/pipes/car-filtering.pipe';
import {AnotherCarsComponent} from './another-cars/another-cars.component';
import {AddAnotherCarComponent} from './another-cars/add-another-car/add-another-car.component';
import {AnotherCarComponent} from './another-cars/another-car/another-car.component';
import {FormsComponent} from './forms/forms.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {TryingHttpComponent} from './trying-http/trying-http.component';
import {HttpClientModule} from "@angular/common/http";
import {RoutingAppComponent} from './routing-app/routing-app.component';
import {RHomepageComponent} from './routing-app/r-homepage/r-homepage.component';
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from './routing-app/not-found/not-found.component';
import {AuthGuard} from "./routing-app/auth-guard/auth-guard.service";
import {AuthService} from "./routing-app/auth-service/auth.service";
import {NewPageComponent} from './routing-app/new-page/new-page.component';
import {DirectivesModule} from "./routing-app/directives/directives.module";
import { AnimationsComponent } from './animations/animations.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
        FormsComponent,
        ReactiveFormsComponent,
        TryingHttpComponent,
        RoutingAppComponent,
        RHomepageComponent,
        NotFoundComponent,
        NewPageComponent,
        AnimationsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        DirectivesModule,
        BrowserAnimationsModule
    ],
    providers: [AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
