import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticationRoutingModule } from './autentication-routing.module';
import { HomeComponent } from './home/home.component';
import { PrimeroModule } from 'src/app/primero/primero.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule,
    PrimeroModule
  ]
})
export class AutenticationModule { }
