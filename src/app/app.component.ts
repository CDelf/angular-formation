import { Component } from '@angular/core';
import {PokemonListComponent} from '../components/ex13/pokemon-list-component/pokemon-list-component';


@Component({
  selector: 'app-root',
  imports: [
    PokemonListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
