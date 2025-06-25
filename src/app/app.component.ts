import { Component } from '@angular/core';
import {UserInitComponent} from '../components/ex10/user-init-component/user-init-component';
import {
  ParentStockDisplayComponent
} from '../components/ex10/parent-stock-display-component/parent-stock-display-component';


@Component({
  selector: 'app-root',
  imports: [
    UserInitComponent,
    ParentStockDisplayComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
