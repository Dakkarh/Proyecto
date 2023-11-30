import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  table: string = 'service';
  columns: any[] = [
    {
      column: 'id',
      title: 'id'
    },
    {
      column: 'name',
      title: 'Nombre'
    },
    {
      column: 'category',
      title: 'Categoria'
    },
    {
      column: 'price',
      title: 'Precio'
    },
    {
      column: 'img_url',
      title: 'Ruta de la imagen'
    }
  ];
}
