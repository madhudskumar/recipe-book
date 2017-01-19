import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeIdSubscriptionHandler:Subscription;

  constructor(
    activatedRoute:ActivatedRoute,
    recipeService:RecipeService
  ) { }

  ngOnInit() {
    this.recipeIdSubscriptionHandler;
  }
}
