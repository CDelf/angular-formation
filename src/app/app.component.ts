import { Component } from '@angular/core';
import {Button} from '../components/ex6/button/button';
import {HoverBox} from '../components/ex6/hover-box/hover-box';
import {KeyTracker} from '../components/ex6/key-tracker/key-tracker';


@Component({
  selector: 'app-root',
  imports: [
    Button,
    HoverBox,
    KeyTracker

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
