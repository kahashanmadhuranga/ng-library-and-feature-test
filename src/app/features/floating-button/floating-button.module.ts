import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FloatingButtonRoutingModule} from './floating-button-routing.module';
import {FloatingButtonComponent} from './floating-button/floating-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    FloatingButtonComponent
  ],
  imports: [
    CommonModule,
    FloatingButtonRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class FloatingButtonModule {
}
