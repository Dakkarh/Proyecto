import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal/principal.component';
import { RolesComponent } from './components/roles/roles.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './components/clientes/clientes.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    RolesComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashaboardModule { }
