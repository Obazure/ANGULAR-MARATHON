import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-r-homepage',
    templateUrl: './r-homepage.component.html',
    styleUrls: ['./r-homepage.component.css']
})
export class RHomepageComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
    }

    openCarsPage() {
        this.router.navigate(['cars'], {relativeTo: this.route});
    }
}
