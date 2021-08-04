import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhoneNumberInputRoutingModule} from './phone-number-input-routing.module';
import {PhoneNumberInputComponent} from './phone-number-input/phone-number-input.component';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PhoneNumberInputComponent
  ],
  imports: [
    CommonModule,
    PhoneNumberInputRoutingModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhoneNumberInputModule {
}
