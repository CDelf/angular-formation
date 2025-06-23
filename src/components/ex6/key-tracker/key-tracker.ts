import { Component } from '@angular/core';

@Component({
  selector: 'app-key-tracker',
  imports: [],
  templateUrl: './key-tracker.html',
  styleUrl: './key-tracker.css'
})
export class KeyTracker {

  onKeyUp(event : Event) {
    const key = (event as KeyboardEvent).key;
    console.log(`touche ${key} relâchée`);
  }
  onKeyDown(event : Event) {
    const key = (event as KeyboardEvent).key;
    console.log(`touche ${key} enfoncée`);
  }
}
