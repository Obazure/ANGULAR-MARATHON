import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDirectiveFirst]'
})
export class DirectiveFirstDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        const {nativeElement} = this.element;
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.renderer.addClass(nativeElement, 'white-text');
    }

}
