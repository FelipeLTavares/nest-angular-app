import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = '/user';
  private token;
  private headers;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  getUsers(): Observable<any> {
    return this.http.get(`http://localhost:3000${this.endpoint}`, {headers: this.headers});
  }

  changeStatus(id: number) {
    return this.http.patch(`http://localhost:3000${this.endpoint}/change-status/${id}`, {}, { headers: this.headers })
  }
}
