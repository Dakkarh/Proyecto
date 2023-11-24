import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    InicioComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PrimeroModule { }
