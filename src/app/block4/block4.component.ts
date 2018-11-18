import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block4',
  templateUrl: './block4.component.html',
  styleUrls: ['./block4.component.css']
})
export class Block4Component implements OnInit {

    headerText = 'Creating some directive.';

    items: number[] = [1,2,3,4,5,6,7,8,9];
current = 1;
    constructor() { }

  ngOnInit() {
  }


  onClick(number: number){
        this.current = number;
  }
}
