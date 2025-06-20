import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloWorld} from '../components/hello-world/hello-world';
import {Welcome} from '../components/welcome/welcome';
import {Page} from '../components/page/page';
import {WelcomeWithName} from '../components/welcome-with-name/welcome-with-name';
import {UserInfo} from '../components/user-info/user-info';
import {UserPageComponent} from '../components/user-page-component/user-page-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, Page, WelcomeWithName, UserInfo, UserPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'angular-formation';
}
