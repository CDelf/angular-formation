import { Component } from '@angular/core';
import {Counter} from '../components/ex11/counter/counter';
import {StockHandler} from '../components/ex11/stock-handler/stock-handler';
import {TaskHandler} from '../components/ex11/task-handler/task-handler';


@Component({
  selector: 'app-root',
  imports: [
    Counter,
    StockHandler,
    TaskHandler
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
