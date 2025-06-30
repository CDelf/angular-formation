import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColor {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color="blue";
  }
}
