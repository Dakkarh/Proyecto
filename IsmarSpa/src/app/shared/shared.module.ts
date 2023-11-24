import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    NavbarComponent,
    CardsComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],

  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    CardsComponent,
    InfoComponent,
    NavbarComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SharedModule { }
