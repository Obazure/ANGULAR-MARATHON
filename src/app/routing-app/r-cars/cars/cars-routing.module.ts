import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RCarsComponent} from "../r-cars.component";
// import {AuthGuard} from "../../auth-guard/auth-guard.service";
import {RCarComponent} from "../../r-car/r-car.component";

const routes: Routes = [
    {
        path: 'cars', component: RCarsComponent, children: [/* canActivate: [AuthGuard],*/
            {path: ':id/:carName', component: RCarComponent},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsRoutingModule {

}