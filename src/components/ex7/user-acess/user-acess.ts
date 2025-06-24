import { Component } from '@angular/core';

@Component({
  selector: 'app-user-acess',
  imports: [],
  templateUrl: './user-acess.html',
  styleUrl: './user-acess.css'
})
export class UserAcess {

  isLoggedIn = false;
  hasSubscription = false;
  isAdmin = false;

  reverseLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  reverseHasSubscription() {
    this.hasSubscription = !this.hasSubscription;
  }

  reverseIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }

}
