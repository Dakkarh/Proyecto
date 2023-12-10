import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {


  table: string = 'products';
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

  formProducts: FormGroup;

  constructor(private FormBuilder: FormBuilder, private AuthService: AuthService, private router: Router) {

    this.formProducts = this.FormBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      img_url: ['', Validators.required]
    });
  }

  registrarProducto() {
    const datosProducto = {
      name: this.formProducts.get('name')?.value,
      category: this.formProducts.get('category')?.value,
      price: this.formProducts.get('price')?.value,
      img_url: this.formProducts.get('img_url')?.value
    };

    this.AuthService.registrarProducto(datosProducto).subscribe(
      (respuesta) => {
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', respuesta);
      },
    );
  };


  submitForm() {
    if (this.formProducts.valid) {
      // Obtener valores del formulario
      const datosProducto = this.formProducts.value;

      this.AuthService.registrarProducto(datosProducto).subscribe(
        (respuesta) => {
          // Manejar la respuesta del servidor aquí
          Swal.fire({
            icon: 'success',
            title: '¡Exito!',
            text: '¡Producto registrado!',
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


