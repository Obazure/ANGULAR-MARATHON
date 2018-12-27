import {NgModule} from "@angular/core";
import {RCarsComponent} from "./routing-app/r-cars/r-cars.component";
import {RouterModule, Routes} from "@angular/router";
import {RHomepageComponent} from "./routing-app/r-homepage/r-homepage.component";
import {RCarComponent} from "./routing-app/r-car/r-car.component";
import {NotFoundComponent} from "./routing-app/not-found/not-found.component";
import {AuthGuard} from "./routing-app/auth-guard/auth-guard.service";
import {NewPageComponent} from "./routing-app/new-page/new-page.component";

const routes: Routes = [
    // {
    //     path: 'cars', component: RCarsComponent, canActivate: [AuthGuard], children: [
    //         {path: ':id/:carName', component: RCarComponent},
    //     ]
    // },
    {path: '', component: RHomepageComponent},
    {path: 'new-page', component: NewPageComponent},
    {path: 'not-found', component: NotFoundComponent},
    // {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}