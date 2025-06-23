import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-welcome-with-name',
  imports: [],
  templateUrl: './welcome-with-name.html',
  styleUrl: './welcome-with-name.css'
})
export class WelcomeWithName {
  name = signal('Alice');
}
