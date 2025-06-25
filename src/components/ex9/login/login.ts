import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  constructor(protected auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login();
    this.router.navigate(['/profile']);
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
