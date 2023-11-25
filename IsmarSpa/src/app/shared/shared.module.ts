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
import { InfoComponent } from './info/info.component';
import { CardsServiciosComponent } from './cardsServicios/cards-servicios.component';
import { CardsProductosComponent } from './cardsProductos/cards-productos.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    NavbarComponent,
    InfoComponent,
    CardsServiciosComponent,
    CardsProductosComponent
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
    CardsServiciosComponent,
    CardsProductosComponent,
    InfoComponent,
    NavbarComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SharedModule { }
