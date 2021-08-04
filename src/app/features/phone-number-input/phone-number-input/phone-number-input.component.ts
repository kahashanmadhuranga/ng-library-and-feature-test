import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SearchCountryField, CountryISO, PhoneNumberFormat} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.scss']
})
export class PhoneNumberInputComponent implements OnInit {

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
