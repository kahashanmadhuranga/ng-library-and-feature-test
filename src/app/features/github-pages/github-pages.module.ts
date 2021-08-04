import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubPagesRoutingModule } from './github-pages-routing.module';
import { GithubPagesComponent } from './github-pages/github-pages.component';


@NgModule({
  declarations: [
    GithubPagesComponent
  ],
  imports: [
    CommonModule,
    GithubPagesRoutingModule
  ]
})
export class GithubPagesModule { }
