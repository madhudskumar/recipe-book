import {Routes, RouterModule} from "@angular/router";
import {SelectMessageComponent} from "./select-message.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipiesComponent} from "./recipies.component";

const RECIPE_CHILD_ROUTES:Routes = [
  {
    path: '',
    component:SelectMessageComponent
  },
  {
    path:'new',
    component:RecipeEditComponent
  },
  {
    path:':id',
    component:RecipeDetailComponent
  },
  {
    path:':id/edit',
    component:RecipeEditComponent
  }
]

const RECIPE_ROUTES:Routes = [{
    path:'recipes',
    component:RecipiesComponent,
    children:RECIPE_CHILD_ROUTES
}];

export const RECIPE_ROUTES_CONFIG = RouterModule.forChild(RECIPE_ROUTES);
