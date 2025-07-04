import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElement {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.display = 'none';
  }

}
