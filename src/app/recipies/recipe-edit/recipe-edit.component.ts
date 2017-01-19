import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder, NgForm} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm:FormGroup;
  private recipeIdSubscriptionHandler:Subscription;
  private recipeId:number;

  constructor(
    private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService,
    private recipe:Recipe,
    private isNew = true,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.recipeIdSubscriptionHandler = this.activatedRoute
      .params.subscribe(
        (params:any) =>{
          if(params.hasOwnProperty('id')){
            this.isNew   = false;
            this.recipeId = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.recipeId);
          }else {
            this.isNew = true;
            this.recipe = null;
          }
        }
      )
  }

  ngOnDestroy(){
    this.recipeIdSubscriptionHandler.unsubscribe()
  }

  private initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngridents:FormArray = new FormArray([]);

    if(!this.isNew) {
      for(let i = 0; i < this.recipe.ingridents.length; i++){
        recipeIngridents.push(
          new FormGroup({
            name:new FormControl(this.recipe.ingridents[i].name, Validators.required),
            amount:new FormControl(this.recipe.ingridents[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        )
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngridents,
    });
  }
}
