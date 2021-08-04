import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhoneNumberInputComponent} from "./phone-number-input/phone-number-input.component";

const routes: Routes = [
  {path: '', component: PhoneNumberInputComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneNumberInputRoutingModule {
}
