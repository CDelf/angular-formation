import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-box',
  imports: [],
  templateUrl: './hover-box.html',
  styleUrl: './hover-box.css'
})
export class HoverBox {

  isHovered = false;

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
