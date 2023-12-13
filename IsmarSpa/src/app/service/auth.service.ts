import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private productsUrl = 'http://localhost:3000/api/products';
  private appointmentsUrl = 'http://localhost:3000/api/appointment';
  private serviceUrl = 'http://localhost:3000/api/service';


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

  registrarCita(datosCita: any) {
    return this.Http.post(`${this.appointmentsUrl}/`, datosCita);
  }

  registrarServicio(datosServicios: any) {
    return this.Http.post(`${this.serviceUrl}/`, datosServicios);
  }

  login(): void {
    // Implementa la lógica de inicio de sesión aquí
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    // Implementa la lógica de cierre de sesión aquí
    localStorage.setItem('isLoggedIn', 'false');
  }
}
