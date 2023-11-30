import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private productsUrl = 'http://localhost:3000/api/products';

  constructor(private Http: HttpClient) { }

  datosInicioSesion(datosInicioSesion: { name: any; email: any; }) {
    throw new Error('Method not implemented.');
  }

  registrarUsuario(datosUsuario: any) {
    return this.Http.post(`${this.apiUrl}/signup`, datosUsuario);
  }

  iniciarSesion(datosInicioSesion: any) {
    return this.Http.post(`${this.apiUrl}/signin`, datosInicioSesion);
  }

  registrarProducto(datosProducto: any) {
    return this.Http.post(`${this.productsUrl}/`, datosProducto);
  }
}
