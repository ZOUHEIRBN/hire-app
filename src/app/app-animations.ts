import { trigger, transition, query, style, stagger, animate, state, keyframes } from '@angular/animations';

export let develop = trigger('develop', [
  state('void', style({ opacity: 0, transform: 'translateX(-10%) scaleX(.95)' })),
  transition(':enter', [
    animate('.5s ease')
  ]),
  transition(':leave', [
    animate('.5s ease')
  ])
])
export let developDown = trigger('developDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-10%) scaleY(.95)' })),
  transition(':enter', [
    animate('.9s ease')
  ]),
  transition(':leave', [
    animate('.9s ease')
  ])
])
export let developUp = trigger('developUp', [
  state('void', style({ opacity: 0, transform: 'translateY(20%) scaleY(.95)' })),
  transition(':enter', [
    animate('.9s ease')
  ]),
  transition(':leave', [
    animate('.9s ease')
  ])
])
export let staggeredDevelop = trigger('staggeredDevelop', [

  transition('* => *', [
    query(':enter', style({ opacity: 0, transform: 'translateX(-10%) scaleX(.95)' }), {optional:true}),
    query(':enter', stagger('.1s', [
      animate('.5s ease', keyframes([
        style({ opacity: 0, transform: 'translateX(-10%) scaleX(.95)', offset:0 }),
        style({ opacity: 0.3, transform: 'translateX(-10%) scaleX(.95)', offset:0.7 }),
        style({ opacity: 1, transform: 'translateX(0%) scaleX(1)', offset:1 })
      ]))
    ]), {optional:true})



  ])
])
export let stretch = trigger('stretchH', [
  state('void', style({ maxWidth:'0vw', maxHeight: '0vh', offset: 0})),
  transition('void => *', [

    animate('2s ease', keyframes([
      style({ maxWidth:'0vw', maxHeight: '0vh', offset: 0}),
      style({ maxWidth:'90vw', maxHeight: '5vh', offset: 0.5}),
      style({ maxWidth:'100vw', maxHeight: '50vh', offset: 1}),
    ]))


  ]),
  transition('* => void', [
    animate('1s ease', keyframes([
      style({ maxWidth:'100vw', maxHeight: '50vh', offset: 0}),
      style({ maxWidth:'10vw', maxHeight: '5vh', offset: 0.3}),
      style({ maxWidth:'0vw', maxHeight: '0vh', offset: 1}),
    ]))

  ])

])
