import {
  animateChild, animate,
  transition, trigger, query, style
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimation', [
    transition("heros <=> hero", [
      style({position: 'relative'}),
      query(':enter :leave', [
        style({
          position : 'relative',
          top : 0,
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
    ])
  ]);
