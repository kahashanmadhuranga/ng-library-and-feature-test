import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  animations: [
    trigger('floatButtonGroup', [
      state('open', style({width: '70%', opacity: 1})),
      state('close', style({width: 0, height: 0, opacity: 0})),
      transition('*=>*', animate(150))
    ]),
    trigger('mainFloatButton', [
      state('open', style({transform: 'rotate(45deg)'})),
      state('close', style({transform: 'rotate(0)'})),
      transition('*=>*', animate(150))
    ])
  ]
})
export class FloatingButtonComponent implements OnInit {

  animState = 'close';

  constructor() {
  }

  ngOnInit(): void {
  }

}
