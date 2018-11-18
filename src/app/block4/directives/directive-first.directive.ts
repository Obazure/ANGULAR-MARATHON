import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appDirectiveFirst]'
})
export class DirectiveFirstDirective implements  OnInit{

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'blue'
  }

}
