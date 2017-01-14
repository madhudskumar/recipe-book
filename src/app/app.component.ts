import { Component } from '@angular/core';
import {RecipeService} from "./recipies/recipe.service";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers:[RecipeService]
})
export class AppComponent {
}
