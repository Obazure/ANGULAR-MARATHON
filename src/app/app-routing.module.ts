import {NgModule} from "@angular/core";
import {RCarsComponent} from "./routing-app/r-cars/r-cars.component";
import {RouterModule, Routes} from "@angular/router";
import {RHomepageComponent} from "./routing-app/r-homepage/r-homepage.component";
import {RCarComponent} from "./routing-app/r-car/r-car.component";
import {NotFoundComponent} from "./routing-app/not-found/not-found.component";

const routes: Routes = [
    {
        path: 'cars', component: RCarsComponent, children: [
            {path: ':id/:carName', component: RCarComponent},
        ]
    },
    {path: '', component: RHomepageComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}