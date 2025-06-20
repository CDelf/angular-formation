import {Component} from '@angular/core';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [
    ChildComponent
  ],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {

  receivedMessage : string = '';
  receivedNumber : number = 0;
  receivedBoolean : boolean = true;

  inputMessage = "Coucou from parent";

  receiveMessage(msg : string) {
    this.receivedMessage = msg;
  }

  receiveNombre(nb : number) {
    this.receivedNumber = nb;
  }

  receiveBool(bool : boolean) {
    this.receivedBoolean = bool;
  }
}
