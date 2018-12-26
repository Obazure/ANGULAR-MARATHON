import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth-service/auth.service";

@Component({
    selector: 'app-r-homepage',
    templateUrl: './r-homepage.component.html',
    styleUrls: ['./r-homepage.component.css']
})
export class RHomepageComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
    }

    openCarsPage() {
        this.router.navigate(['cars'], {relativeTo: this.route});
    }

    changeAuthStatus(status: string){
        if (status === 'login'){
            this.auth.logIn();
        }else {
            this.auth.logOut();
        }
    }
}
