import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {addToStock, removeFromStock, reset} from '../../../store/stock.action';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-stock-handler',
  imports: [
    AsyncPipe
  ],
  templateUrl: './stock-handler.html',
  styleUrl: './stock-handler.css'
})
export class StockHandler {

  stock$ : Observable<number>;

  constructor(private store: Store<{ stock: number }>) {
    this.stock$ = store.select(state => state.stock);
  }

  addToStockButton(nb : number) {
    this.store.dispatch(addToStock({nb}));
  }

  removeFromStockButton(nb: number) {
    this.store.dispatch(removeFromStock({nb}));
  }

  resetStockButton() {
    this.store.dispatch(reset());
  }


}
