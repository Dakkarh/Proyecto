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
      email: ['', [Validators.required, Validators.pattern('')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', [Validators.required]],
      date: [''],
      gender: ['']
    });
  }

  get nameNoValido() {
    return this.myForm.get('name')?.invalid && this.myForm.get('name')?.touched;
  }
  get lastNameNoValido() {
    return this.myForm.get('lastName')?.invalid && this.myForm.get('lastName')?.touched;
  }
  get documentNoValido() {
    return this.myForm.get('document')?.invalid && this.myForm.get('document')?.touched;
  }
  get emailNoValido(){
    return this.myForm.get('email')?.invalid && this.myForm.get('email')?.touched;
  }
  get passwordNoValido(){
    return this.myForm.get('password')?.invalid && this.myForm.get('password')?.touched;
  }
  get addressNoValido(){
    return this.myForm.get('address')?.invalid && this.myForm.get('address')?.touched;
  }
  get genderNoValido(){
    return this.myForm.get('gender')?.invalid && this.myForm.get('gender')?.touched;
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
    );
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
            text: 'Se ha registrado correctamente',
          })
          // Manejar la respuesta del servidor aquí
          console.log('Respuesta del servidor:', respuesta);
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          // Manejar errores aquí
          console.error('Error en la solicitud:', error);
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: '¡Error al registrarse. Intentelo de nuevo!'
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
