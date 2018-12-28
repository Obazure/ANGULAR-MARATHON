import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {RHomepageComponent} from "./routing-app/r-homepage/r-homepage.component";
import {NotFoundComponent} from "./routing-app/not-found/not-found.component";
import {NewPageComponent} from "./routing-app/new-page/new-page.component";

const routes: Routes = [
    // {
    //     path: 'cars', component: RCarsComponent, canActivate: [AuthGuard], children: [
    //         {path: ':id/:carName', component: RCarComponent},
    //     ]
    // },
    {path: '', component: RHomepageComponent},
    {path: 'cars', loadChildren: './routing-app/r-cars/cars/r-cars.module#RCarsModule'},
    {path: 'new-page', component: NewPageComponent},
    {path: 'not-found', component: NotFoundComponent},
    // {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}