import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {decrement, divideBy, increment, incrementBy, reset} from '../../../store/counter.action';

@Component({
  selector: 'app-counter',
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  counter$ : Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select(state => state.counter);
  }

  incrementButton() {
    this.store.dispatch(increment());
  }

  decrementButton() {
    this.store.dispatch(decrement());
  }

  resetButton() {
    this.store.dispatch(reset());
  }

  incrementByButton(nb : number) {
    this.store.dispatch(incrementBy({nb}));
  }

  divideByButton(nb : number) {
    this.store.dispatch(divideBy({nb}));
  }
}
