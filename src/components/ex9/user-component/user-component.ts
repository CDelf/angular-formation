import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-user-component',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent {

  userId : string | null = '50';

  constructor(private route:  ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
