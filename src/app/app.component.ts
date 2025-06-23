import { Component } from '@angular/core';
import {ItemList} from '../components/item-list/item-list';

@Component({
  selector: 'app-root',
  imports: [ItemList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items = ['Pomme', 'Banane', 'Orange', 'Ananas', 'Mangue'];

  query = 'ng';

}
