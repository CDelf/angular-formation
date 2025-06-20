import {Component, input, model, output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
  message = input<string>();
  nombre = input<number>();
  vraiOuFaux = input<boolean>();

  messageChange = output<string>();
  nombreChange = output<number>();
  vraiOuFauxChange = output<boolean>();

  inputMessage =  model("");

  sendData() {
    this.messageChange.emit('Message enfant!');
    this.nombreChange.emit(9999999);
    this.vraiOuFauxChange.emit(false);
  }
}
