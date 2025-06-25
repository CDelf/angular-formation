import { Component } from '@angular/core';
import {StockDisplayComponent} from '../stock-display-component/stock-display-component';

@Component({
  selector: 'app-parent-stock-display-component',
  imports: [
    StockDisplayComponent
  ],
  templateUrl: './parent-stock-display-component.html',
  styleUrl: './parent-stock-display-component.css'
})
export class ParentStockDisplayComponent {

  stock: number = 0;

  addProduct() {
    this.stock += 1;
  }

  removeProduct() {
    this.stock -= 1;
  }
}
