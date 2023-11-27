import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BdService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private Http: HttpClient) { }

  getUsers(): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'x-access-token': token as string,
      "Content-type": "application/json"
    });

    return this.Http.get(this.apiUrl, { headers });
  }

  getUsersByID(id: string) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'x-access-token': token as string,
      "Content-type": "application/json"
    });

    const url = `${this.apiUrl}/${id}`;

    return this.Http.get(url, { headers });
  }

  updateUser(data: { id: string, address: string }): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'x-access-token': token as string,
      "Content-type": "application/json"
    });

    const url = `${this.apiUrl}/${data.id}`;
    let address = data.address;
    const body = { address };

    return this.Http.put(url, body, { headers });
  }


}
