import {trigger, animate, style, group, query as q, transition, stagger,} from '@angular/animations';

export const durationNum = 800;
export const duration = durationNum+'ms ';
export const mockDelayNum = 2000;
export const mockDelay = mockDelayNum+'ms ';

const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [

  transition('cover => *', [

    // set
    group([
      // query(':leave .ara__float-in', style({ opacity: 0, transform: 'translateY(0px) scale(1)' }),{ optional: true }),
      query(':enter, :leave',
        style({ position: 'fixed', width:'100%', minHeight: '100%' })
      ,{ optional: true }),

      query(':leave .ara__fade-in', style({ opacity: 0 }),{ optional: true }),
    ]),

    // animate 1
    group([

      query(':leave .ara__float-in', stagger(100, [
        animate('800ms 0ms cubic-bezier(.5,-0.5,.5,1)',
          style({
            transform: 'translateY(-200px)',
          })),
        ]), { optional: true }),

      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('800ms 300ms ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('800ms 300ms ease-in-out', style({ transform: 'translateY(-100%)' }))
      ], { optional: true }),
    ])
  ]),

  transition('about => projects', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ]),

  transition('projects => about', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),

  transition('project => projects', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),



  transition('* => cover', [

      group([
        // query(':leave', style({ position: 'fixed', width:'100%' }),{ optional: true }),
        query(':enter', style({ opacity: 0, position: 'fixed', width:'100%' }),{ optional: true }),
        query(':enter .ara__float-in', style({ opacity: 0, transform: 'translateY(100px) scale(0.9)' }),{ optional: true }),
        query(':enter .ara__fall-in', style({ opacity: 0, transform: 'translateY(-100px) scale(0.4)' }),{ optional: true }),
        query(':enter .ara__fade-in', style({ opacity: 0 }),{ optional: true }),
        query(':enter .main', style({ opacity: 0, position: 'absolute', width: '100%', transform: 'translateY(50%)' }),{ optional: true }),
      ]),

      // query(':leave', [
      //   animate('200ms cubic-bezier(0,0,.5,1)',
      //     style({ opacity: 0 })
      //   )
      // ], { optional: true }),

      group([

        // query(':enter .main', [
        //   style({}),
        //   animate('800ms 0ms cubic-bezier(0.25,-0.6,0.6,1.6)',
        //     style({ transform: 'translateY(0%)' })
        //   )
        // ], { optional: true }),

        query(':enter', [
          animate('800ms 800ms cubic-bezier(0,0,.5,1)',
            style({ opacity: 1 })
          )
        ], { optional: true }),

        query(':enter .ara__float-in', stagger(100, [
          animate('800ms 800ms cubic-bezier(0,0,.5,1)',
            style({
              opacity: 1,
            })),
          ]), { optional: true }),

        query(':enter .ara__float-in', stagger(100, [
          animate('800ms 800ms cubic-bezier(0.85,3,0.5,-0.25)',
            style({
              transform: 'translateY(0px) scale(1)',
            })),
          ]), { optional: true }),

        query(':enter .ara__fall-in', stagger(100, [
          animate('250ms 1300ms cubic-bezier(0,0,.5,1)',
            style({
              transform: 'translateY(0px) scale(1)',
              opacity: 1,
            })),
          ]), { optional: true }),

      ]),

      query(':enter .ara__fade-in', stagger(100, [
        animate('800ms 00ms cubic-bezier(0,0,.5,1)',
          style({
            opacity: 1,
          })),
        ]), { optional: true }),

      query(':enter', [
        style({ position: 'static' }),
      ], { optional: true }),

    ]),



    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),




  transition('project <=> project', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  
  transition('* => project', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),

])
