import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticationRoutingModule } from './autentication-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule
  ]
})
export class AutenticationModule { }
