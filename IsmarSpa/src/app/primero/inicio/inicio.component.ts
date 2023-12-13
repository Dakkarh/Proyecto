import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  formCitas: FormGroup;

  constructor(private FormBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.formCitas = this.FormBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      date_hour: ['', Validators.required],
      client_id: ['', Validators.required],
      beautician_id: ['', Validators.required],
      service_id: ['', Validators.required],
    });
  }


  registrarCita() {
    const datosCita = {
      name: this.formCitas.get('name')?.value,
      lastName: this.formCitas.get('lastName')?.value,
      email: this.formCitas.get('email')?.value,
      date_hour: this.formCitas.get('date_hour')?.value,
      client_id: this.formCitas.get('client_id')?.value,
      beautician_id: this.formCitas.get('beautician_id')?.value,
      service_id: this.formCitas.get('service_id')?.value,
    };

    // Llamamos al servicio AuthService para registrar la cita
    this.authService.registrarCita(datosCita).subscribe(
      (respuesta) => {
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', respuesta);
      },
    );
  }

  submitForm() {
    if (this.formCitas.valid) {
      // Obtener valores del formulario
      const datosCita = this.formCitas.value;

      // Llamar al servicio para registrar la cita
      this.authService.registrarCita(datosCita).subscribe(
        (respuesta) => {
          Swal.fire({
            icon: 'success',
            title: '¡Registro de cita exitoso!',
            text: 'La cita se ha registrado correctamente',
          });
          // Manejar la respuesta del servidor aquí
          console.log('Respuesta del servidor:', respuesta);
          location.reload();
        },
        (error) => {
          // Manejar errores aquí
          console.error('Error en la solicitud:', error);
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: '¡Ha ocurrido un error al registrar la cita!'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: '¡Por favor complete los campos del formulario correctamente!',
      });
    }
  }

}
