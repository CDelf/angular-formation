import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-login',
  imports: [],
  templateUrl: './if-else-login.html',
  styleUrl: './if-else-login.css'
})
export class IfElseLogin {

  isLoggedIn = true;

  roles = ['Utilisateur', 'Editeur', 'Admin'];
  role = '';

  reverse() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  selectRole(event : Event) {
    this.role = (event.target as HTMLSelectElement).value;
  }
}
