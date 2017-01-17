import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router} from "@angular/router";
import {recognize} from "@angular/router/src/recognize";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipesIndex:number;

  @Input() selectedRecipe:Recipe;
  constructor(private sls:ShoppingListService, private router:Router) { }

  ngOnInit() {
    this.recipesIndex = 7;
  }

  onAddToShoppingList(){
    this.sls.addItmes(this.selectedRecipe.ingridents);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipesIndex, 'edit'])
  }

  onDelete(){
    this.router.navigate(['/recipes'])
  }
}
