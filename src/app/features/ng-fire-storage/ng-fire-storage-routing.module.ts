import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgFireStorageComponent} from "./ng-fire-storage/ng-fire-storage.component";

const routes: Routes = [
  {path: '', component: NgFireStorageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgFireStorageRoutingModule {
}
