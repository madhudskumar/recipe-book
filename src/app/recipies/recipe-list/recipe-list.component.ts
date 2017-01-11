import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [];

  recipe = new Recipe('dummy', 'Dub=mmy', 'http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2014%2F11%2Fnexus2cee_image_thumb1_thumb_thumb.png&w=150&h=150&zc=3');
  constructor() { }

  ngOnInit() {
  }

}
