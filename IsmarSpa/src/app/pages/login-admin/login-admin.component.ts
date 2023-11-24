import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  iniciarSesion() {
    const datosInicioSesion = {
      email: this.myForm.get('email')?.value,
      password: this.myForm.get('password')?.value,
    };
    // Llamamos al servicio AuthService para registrar al usuario
    this.authService.iniciarSesion(datosInicioSesion).subscribe(
      (respuesta) => {
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', respuesta);
      },
    )
  }

  submitForm() {
    if (this.myForm.valid) {
      const datosInicioSesion = this.myForm.value;
      this.authService.iniciarSesion(datosInicioSesion).subscribe(
        (respuesta) => {
          console.log('Respuesta del servidor:', respuesta);
          // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito.
          Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Se ha iniciado sesión correctamente',
          })
          // Redirige al usuario a la página principal o a la ubicación deseada
          this.router.navigate(['/dashboard']);

        },
        (error) => {
          // Manejar errores aquí, por ejemplo, mostrar un mensaje de error.
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: '¡El correo electronico o la contraseña son incorrectos!'
          })
          console.error('Error en la solicitud:', error);
        }
      );
    } else {
      // Manejar el caso en el que el formulario no sea válido, por ejemplo, mostrar un mensaje de error.
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: '¡Complete los campos correctamente!'
      })
      console.error('Formulario no válido. Complete los campos correctamente.');
    }
  }
}
