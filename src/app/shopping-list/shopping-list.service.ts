import {Ingredient} from "../shared/ingredient";
export class ShoppingListService {
  private items:Ingredient[] = [];

  constructor() { }

  getItmes() {
    return this.items;
  }

  addItmes(item: Ingredient[]){
    Array.prototype.push.apply(this.items, item);
  }

  addItem(item:Ingredient){
    this.items.push(item);
  }
}
