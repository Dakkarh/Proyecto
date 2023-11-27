import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/autentication/autentication.module').then(
        (m) => m.AutenticationModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/autentication/autentication.module').then(
        (m) => m.AutenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashaboardModule
      ),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/autentication/autentication.module').then(
        (m) => m.AutenticationModule
      ),
  },
  {
    path: '',
    redirectTo: 'auth', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
