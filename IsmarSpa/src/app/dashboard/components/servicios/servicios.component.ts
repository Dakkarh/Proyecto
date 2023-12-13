import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import Swal from 'sweetalert2';

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
      column: 'description',
      title: 'Descripción'
    },
    {
      column: 'price',
      title: 'Precio'
    }
  ];


  formService: FormGroup;

  constructor(private FormBuilder: FormBuilder, private AuthService: AuthService, private Router: Router) {

    this.formService = this.FormBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  registrarServicio() {
    const datosServicios = {
      name: this.formService.get('name')?.value,
      description: this.formService.get('description')?.value,
      price: this.formService.get('price')?.value
    };

    this.AuthService.registrarServicio(datosServicios).subscribe(
      (respuesta) => {
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', respuesta);
      },
    );
  };


  submitForm() {
    if (this.formService.valid) {
      // Obtener valores del formulario
      const datosServicios = this.formService.value;

      this.AuthService.registrarServicio(datosServicios).subscribe(
        (respuesta) => {
          // Manejar la respuesta del servidor aquí
          Swal.fire({
            icon: 'success',
            title: '¡Exito!',
            text: 'Servicio registrado!',
          })
          console.log('Respuesta del servidor:', respuesta);
          location.reload();
        },
        (error) => {
          // Manejar errores aquí
          console.error('Error en la solicitud:', error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: '¡Por favor complete los campos del formulario correctamente!',
      })
    }
  }
}
