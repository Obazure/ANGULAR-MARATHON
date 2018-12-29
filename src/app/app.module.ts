import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import { CarComponent } from './car/car.component';
import {CarService} from "./car/car.service";
import { PowPipe } from './pipes/pow.pipe';
import { ColorDirective } from './directives/color.directive';

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        PowPipe,
        ColorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [CarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
