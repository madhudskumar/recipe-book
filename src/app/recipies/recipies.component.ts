import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipies',
  templateUrl: './recipies.component.html'
})
export class RecipiesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
