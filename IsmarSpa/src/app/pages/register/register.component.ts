import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder, private AuthService: AuthService, private router: Router) {
    this.myForm = this.FormBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],
      date: [''],
      gender: ['']
    });
  }
  registrarUsuario() {
    const datosUsuario = {
      name: this.myForm.get('name')?.value,
      lastName: this.myForm.get('lastName')?.value,
      document: this.myForm.get('document')?.value,
      email: this.myForm.get('email')?.value,
      password: this.myForm.get('password')?.value,
      address: this.myForm.get('address')?.value,
      date: this.myForm.get('date')?.value,
      gender: this.myForm.get('gender')?.value
    };
    // Llamamos al servicio AuthService para registrar al usuario
    this.AuthService.registrarUsuario(datosUsuario).subscribe(
      (respuesta) => {
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', respuesta);
      },
    )
  }

  submitForm() {
    if (this.myForm.valid) {
      // Obtener valores del formulario
      const datosUsuario = this.myForm.value;

      // Llamar al servicio para registrar al usuario
      this.AuthService.registrarUsuario(datosUsuario).subscribe(
        (respuesta) => {
          Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: 'Se a registrado correctamente',
          })
          // Manejar la respuesta del servidor aquí
          console.log('Respuesta del servidor:', respuesta);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Manejar errores aquí
          console.error('Error en la solicitud:', error);
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: '¡El correo electronico o el documento ya existen!'
          })
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
