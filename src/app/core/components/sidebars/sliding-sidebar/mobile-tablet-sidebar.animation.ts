import { animate, state, style, transition, trigger } from '@angular/animations';

export const ShowHideAnimation = trigger('showHide', [
    state('initial', style({
      transform: 'translateX(-100%)'
    })),
    state('show', style({
      transform: 'translateX(0)'
    })),
    state('hidden', style({
      transform: 'translateX(-100%)'
    })),
    transition('initial => show', [
      animate('0.4s ease-out')
    ]),
    transition('hidden => show', [
      animate('0.4s ease-out')
    ]),
    transition('show => hidden', [
      animate('0.5s ease-in')
    ])
]);
