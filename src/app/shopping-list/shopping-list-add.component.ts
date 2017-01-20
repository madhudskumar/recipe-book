import {Component, Input, OnChanges} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true;
  @Input() item:Ingredient;

  constructor(private sls:ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = new Ingredient(null,null);
    }else {
      this.isAdd = false
    }
  }

  onSubmit(ingrident:Ingredient){
    let newIngrident:Ingredient = new Ingredient(ingrident.name, ingrident.amount);
    if(!this.isAdd){
      this.sls.editItem(this.item, newIngrident)
      this.onClear();
    }else{
      this.item = newIngrident;
      this.sls.addItem(this.item)
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd = true;
  }
}
