import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  table: string = 'appointments';
  columns: any[] = [
    {
      column: 'id',
      title: 'id'
    },
    {
      column: 'email',
      title: 'Correo electronico'
    },
    {
      column: 'date_hour',
      title: 'Fecha y hora'
    },
    {
      column: 'client_id',
      title: 'cliente'
    },
    {
      column: 'beautician_id',
      title: 'esteticista'
    },
    {
      column: 'service_id',
      title: 'Servicio'
    },
    {
      column: 'state',
      title: 'estado'
    },
  ];


}

