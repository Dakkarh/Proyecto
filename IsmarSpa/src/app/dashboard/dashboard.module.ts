import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal/principal.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    ClientesComponent,
    ProductosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashaboardModule { }
