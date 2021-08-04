import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GithubPagesComponent} from "./github-pages/github-pages.component";

const routes: Routes = [
  {path: '', component: GithubPagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubPagesRoutingModule {
}
