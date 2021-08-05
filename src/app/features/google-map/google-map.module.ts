import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GoogleMapRoutingModule} from './google-map-routing.module';
import {GoogleMapComponent} from './google-map/google-map.component';
import {GoogleMapsModule} from '@angular/google-maps'

@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    GoogleMapsModule
  ]
})
export class GoogleMapModule {
}
