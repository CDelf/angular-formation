import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

  users = [
    { name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { name: 'Bob', email: 'bob@example.com', role : 'editor' },
    { name: 'Charlie', email: 'charlie@example.com', role : 'editor' }
  ];

  userRole = signal<'admin' | 'editor' | 'guest'>('guest');

  setRole(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value;

    if (value === 'admin' || value === 'editor' || value === 'guest') {
      this.userRole.set(value);
    }
  }
}
