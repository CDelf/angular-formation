import {Directive, ElementRef, input, OnChanges} from '@angular/core';


@Directive({
  selector: '[appBorder]'
})
export class Border implements OnChanges {

  constructor(private el: ElementRef) { }

  borderColor = input<string>('black');
  borderWidth = input<string>('2px');

  ngOnChanges(): void {
    this.el.nativeElement.style.border = `${this.borderWidth()} solid ${this.borderColor()}`;
  }
}
