import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-select-message',
  template: `
    <blockquote class="blockquote-reverse">
      please select a recipe
    </blockquote>
  `,
  styles: []
})
export class SelectMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
