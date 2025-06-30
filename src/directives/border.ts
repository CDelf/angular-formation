import {Directive, ElementRef, Input, OnChanges} from '@angular/core';


@Directive({
  selector: '[appBorder]'
})
export class Border implements OnChanges {

  constructor(private el: ElementRef) { }

  @Input() borderColor : string = 'black';
  @Input() borderWidth : string = '2px';

  ngOnChanges(): void {
    this.el.nativeElement.style.border = `${this.borderWidth} solid ${this.borderColor}`;
  }
}
