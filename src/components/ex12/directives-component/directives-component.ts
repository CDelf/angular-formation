import {Component} from '@angular/core';
import {ChangeColor} from '../../../directives/change-color';
import {HideElement} from '../../../directives/hide-element';
import {Border} from '../../../directives/border';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-directives-component',
  imports: [
    ChangeColor,
    HideElement,
    Border,
    FormsModule
  ],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css'
})
export class DirectivesComponent {

  color = 'black';
  width = '2px';
}
