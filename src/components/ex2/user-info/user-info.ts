import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css'
})
export class UserInfo {

  name = signal('Alice');
  age = signal(17);

  isMajeur = computed(() => this.age() >= 18);

  constructor() {
    // effect 1 : log nom/age
    effect(() => {
      console.log(`Nom : ${this.name()}, Age : ${this.age()}`);
    });
    // effect 2 : alerte si mineur
    effect(() => {
      if(!this.isMajeur()) {
        console.error("ALERTE MINEUR!")
      }
    });
  }
}



