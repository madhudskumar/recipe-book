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

  editItem(oldItem:Ingredient, newItem:Ingredient){
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item:Ingredient){
    this.items.splice(this.items.indexOf(item), 1);
  }
}
