import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  datosInicioSesion(datosInicioSesion: { name: any; email: any; }) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private Http: HttpClient) { }

  registrarUsuario(datosUsuario: any) {
    return this.Http.post(`${this.apiUrl}/signup`, datosUsuario);
  }

  iniciarSesion(datosInicioSesion: any) {
    return this.Http.post(`${this.apiUrl}/signin`, datosInicioSesion);
  }
}
