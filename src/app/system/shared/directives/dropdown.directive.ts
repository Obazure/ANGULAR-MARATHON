import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[wrmDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }
}
