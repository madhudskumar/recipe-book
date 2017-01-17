import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipesIndex:number;
  selectedRecipe:Recipe;
  activatedRouteSubscription:Subscription;

  constructor(
    private sls:ShoppingListService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService
  ) { }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute
      .params.subscribe(
        (param:any) => {
          this.recipesIndex = param['id']
          this.selectedRecipe = this.recipeService.getRecipe(this.recipesIndex);
        });
  }

  onAddToShoppingList(){
    this.sls.addItmes(this.selectedRecipe.ingridents);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipesIndex, 'edit'])
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes'])
  }

  ngOnDestroy(){
    this.activatedRouteSubscription.unsubscribe();
  }
}
