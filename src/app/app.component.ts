import { Component } from '@angular/core';
import {IfElseLogin} from '../components/ex7/if-else-login/if-else-login';
import {UserAcess} from '../components/ex7/user-acess/user-acess';
import {DashboardComponent} from '../components/ex7/dashboard-component/dashboard-component';



@Component({
  selector: 'app-root',
  imports: [
    IfElseLogin,
    UserAcess,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
