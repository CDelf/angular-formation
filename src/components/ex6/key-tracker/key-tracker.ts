import { Component } from '@angular/core';

@Component({
  selector: 'app-key-tracker',
  imports: [],
  templateUrl: './key-tracker.html',
  styleUrl: './key-tracker.css'
})
export class KeyTracker {

  onKeyUp() {
    console.log('touche relâchée');
  }
  onKeyDown() {
    console.log('touche enfoncée');
  }
}
