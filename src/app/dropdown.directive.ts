import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private isOpen = false;
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') onMouseClick(){
    this.isOpen = true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.isOpen = false;
  }

}
