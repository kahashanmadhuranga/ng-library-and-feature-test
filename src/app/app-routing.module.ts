import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'google-map',
    loadChildren: () => import('./features/google-map/google-map.module').then(m => m.GoogleMapModule)
  },
  {
    path: 'phone-number-input',
    loadChildren: () => import('./features/phone-number-input/phone-number-input.module')
      .then(m => m.PhoneNumberInputModule)
  },
  {
    path: 'how-to-use-github-pages',
    loadChildren: () => import('./features/github-pages/github-pages.module')
      .then(m => m.GithubPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
