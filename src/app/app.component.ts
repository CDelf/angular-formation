import { Component } from '@angular/core';
import {CardComponent} from '../components/ex5/card-component/card-component';
import {NgComponentOutlet} from '@angular/common';
import {Child1} from '../components/ex5/child1/child1';
import {Child2} from '../components/ex5/child2/child2';
import {Child3} from '../components/ex5/child3/child3';
import {SelectChild} from '../components/ex5/select-child/select-child';
import {ModalComponent} from '../components/ex5/modal-component/modal-component';
import {Welcome} from '../components/ex1/welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [
    CardComponent,
    NgComponentOutlet,
    SelectChild,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  child1 = Child1;
  child2 = Child2;
  child3 = Child3;

  componentToRender: any = null;

  dynamicComponent = Welcome;

  isOpen = true;

  setComponent(component: any) {
    this.componentToRender = component;
  }

  closeModal() {
    this.isOpen = false;
  }
}
