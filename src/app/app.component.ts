import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeWithName} from '../components/welcome-with-name/welcome-with-name';
import {UserInfo} from '../components/user-info/user-info';
import {UserPageComponent} from '../components/user-page-component/user-page-component';
import {ParentComponent} from "../components/parent-component/parent-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeWithName, UserInfo, UserPageComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'angular-formation';
}
