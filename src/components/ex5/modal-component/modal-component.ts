import {Component, input, output} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-modal-component',
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './modal-component.html',
  styleUrl: './modal-component.css'
})
export class ModalComponent {

  dynamicComponent = input.required<any>();
  close = output<void>();
}
