import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PageNotFoundComponent} from "./page-not-found.component";
const APP_ROUTES:Routes = [
  {
    path:'',
    redirectTo:'/recipes',
    pathMatch:'full'
  },
  {
    path:'shopping-list',
    component:ShoppingListComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

export const APP_ROUTE_CONFIG = RouterModule.forRoot(APP_ROUTES);
