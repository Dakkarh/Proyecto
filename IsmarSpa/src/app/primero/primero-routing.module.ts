import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from '../pages/autentication/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'inicio', component: InicioComponent},
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeroRoutingModule { }
