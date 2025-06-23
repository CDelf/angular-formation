import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-user-page-component',
  imports: [],
  templateUrl: './user-page-component.html',
  styleUrl: './user-page-component.css'
})
export class UserPageComponent {
  name = signal('Alice');
  age = signal(25);
  email = signal('alice@example.com');
  city = signal('Paris');
  job = signal('Développeuse');

  isAdult = computed(() => this.age() >= 18);

  constructor() {
    effect(() => {
      console.log(`🔁 Mise à jour des infos utilisateur :
  - Nom : ${this.name()}
  - Âge : ${this.age()}
  - Email : ${this.email()}
  - Ville : ${this.city()}
  - Métier : ${this.job()}
`);
    });
    effect(() => {
      if(!this.isAdult()) {
        console.error("Utilisateur mineur!");
      }
    });
  }

  protected readonly Number = Number;
}
