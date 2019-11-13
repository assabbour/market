import { Component } from '@angular/core';
import { trigger, style } from '@angular/animations';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router', [
      /*transition('... => ...', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ])*/
    ])
  ]
})
export class AppComponent {
  state;
}
