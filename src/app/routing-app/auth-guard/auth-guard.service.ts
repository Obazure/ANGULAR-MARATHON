import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "../auth-service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService
    ) {
    }


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
        | Promise<boolean>
        | boolean {

        return this.auth.isAuth().then((isLoggedIn: boolean)=>{
            if (isLoggedIn){
                return true;
            }else{
                return false;
            }
        });
    }

}
