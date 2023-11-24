import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  table: string = '';
  columns: any[]=[
    {
      column: 'name',
      title:'Nombre'
    },
    {
      column: 'lastName',
      title:'Apellido'
    },
    {
      column: 'document',
      title:'Documento'
    },
  ];
  constructor(){

  }
}

