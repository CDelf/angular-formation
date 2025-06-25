import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-init-component',
  imports: [],
  templateUrl: './user-init-component.html',
  styleUrl: './user-init-component.css'
})
export class UserInitComponent implements OnInit {

  user = {
    name: '',
    age: 0,
    address: ''
  }

  ngOnInit() {
    this.user.name = 'John';
    this.user.age = 25;
    this.user.address = '1 rue des Cerisiers';
  }

}
