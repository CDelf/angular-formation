import { Component } from '@angular/core';
import {Welcome} from '../welcome/welcome';
import {Titre} from '../titre/titre';

@Component({
  selector: 'app-page',
  imports: [
    Welcome,
    Titre
  ],
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page {

}
