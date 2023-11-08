import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal/principal.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  {
    path: '',component: PrincipalComponent,children: [
      {path: 'clientes', component: ClientesComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
