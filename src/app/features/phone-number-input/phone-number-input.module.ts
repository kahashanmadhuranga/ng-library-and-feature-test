import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneNumberInputRoutingModule } from './phone-number-input-routing.module';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';


@NgModule({
  declarations: [
    PhoneNumberInputComponent
  ],
  imports: [
    CommonModule,
    PhoneNumberInputRoutingModule
  ]
})
export class PhoneNumberInputModule { }
