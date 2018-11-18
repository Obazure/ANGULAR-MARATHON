import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDirectiveFirst]'
})
export class DirectiveFirstDirective {

    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.background = 'green';
        this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.background = 'transparent';
        this.renderer.removeClass(this.element.nativeElement, 'white-text');
    }

}
