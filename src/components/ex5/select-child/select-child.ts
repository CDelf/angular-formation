import {Component, output} from '@angular/core';
import {Child1} from '../child1/child1';
import {Child2} from '../child2/child2';
import {Child3} from '../child3/child3';

@Component({
  selector: 'app-select-child',
  imports: [
  ],
  templateUrl: './select-child.html',
  styleUrl: './select-child.css'
})
export class SelectChild {

  componentsMap : { [key: string]: any } = {
    one: Child1,
    two: Child2,
    three: Child3
  };

  selectedComponent = output<any>();
  selectedKey: string = '';

  onSelectChange(event: Event) {
    this.selectedKey = (event.target as HTMLSelectElement).value;
    this.selectedComponent.emit(this.componentsMap[this.selectedKey]);
  }
}
