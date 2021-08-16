import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgFireStorageRoutingModule } from './ng-fire-storage-routing.module';
import { NgFireStorageComponent } from './ng-fire-storage/ng-fire-storage.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    NgFireStorageComponent
  ],
  imports: [
    CommonModule,
    NgFireStorageRoutingModule,
    MatButtonModule,
  ]
})
export class NgFireStorageModule { }
