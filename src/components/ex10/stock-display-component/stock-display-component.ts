import {Component, input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stock-display-component',
  imports: [],
  templateUrl: './stock-display-component.html',
  styleUrl: './stock-display-component.css'
})
export class StockDisplayComponent implements OnChanges {

  stock = input<number>(0);
  previousStock : number = 0;
  message : string = '';
  isNegative : boolean = false;
  firstChange: boolean = true;

  ngOnChanges(changes: SimpleChanges) : void {
    if(changes['stock']) {
      const previousValue = changes['stock'].previousValue ?? 0;
      const newValue = changes['stock'].currentValue;
      this.previousStock = previousValue;
      this.isNegative = newValue < 0;

      if (this.firstChange) {
        this.firstChange = false;
        return;
      }

      if(newValue > previousValue) {
        this.message = 'Stock en hausse'
      } else {
        this.message = 'Stock en baisse'
      }
    }
  }
}
