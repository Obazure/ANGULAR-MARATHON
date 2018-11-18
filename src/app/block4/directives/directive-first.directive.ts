import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDirectiveFirst]'
})
export class DirectiveFirstDirective {

    @Input('appDirectiveFirst') hoverColor: string = 'green';
    @Input() defaultColor: string;


    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
        this.background = this.defaultColor;
    }

}
