import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {APP_ROUTE_CONFIG} from "./app.routes";
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectMessageComponent } from './recipies/select-message.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import {RECIPE_ROUTES_CONFIG} from "./recipies/recipes.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    PageNotFoundComponent,
    SelectMessageComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RECIPE_ROUTES_CONFIG,
    APP_ROUTE_CONFIG
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
