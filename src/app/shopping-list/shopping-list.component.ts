import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [
    new Ingredient('a', 1),
    new Ingredient('b', 1),
    new Ingredient('c', 1),
  ];
  constructor() { }

  ngOnInit() {
  }

}
