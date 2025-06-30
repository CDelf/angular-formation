import { Component } from '@angular/core';
import {DirectivesComponent} from '../components/ex12/directives-component/directives-component';


@Component({
  selector: 'app-root',
  imports: [
    DirectivesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
