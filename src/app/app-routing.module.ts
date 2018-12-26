import {NgModule} from "@angular/core";
import {RCarsComponent} from "./routing-app/r-cars/r-cars.component";
import {RouterModule, Routes} from "@angular/router";
import {RHomepageComponent} from "./routing-app/r-homepage/r-homepage.component";
import {RCarComponent} from "./routing-app/r-car/r-car.component";

const routes: Routes = [
    {path: 'cars', component: RCarsComponent},
    {path: 'cars/:id/:carName', component: RCarComponent},
    {path: '', component: RHomepageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}