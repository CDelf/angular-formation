import {Component, input} from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  items = input.required<string[]>();
  query = input.required<string>()

  get filteredItems(): string[] {

    return this.items().filter(item => {
      var q = item.toLowerCase();
      return q.includes(this.query());
    })
  }

  products = [{
    "id":1,
    "name":"shampoo",
    "category":"hygiene"
  }, {
    "id":2,
    "name":"apple",
    "category":"alimentary"
  },{
    "id":3,
    "name":"beef",
    "category":"alimentary"
  }, {
    "id":4,
    "name":"stephen king novel",
    "category": "culture"
  }]

  filteredProducts = this.products.filter(
    pdt => pdt.category.includes("alimentary")
  )
}
