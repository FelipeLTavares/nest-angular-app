import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../dto/createUser.dto';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = '/auth';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object, private router: Router) { }

  login(credentials: { email: string; senha: string }): Observable<any> {
    return this.http.post( `http://localhost:3000${this.endpoint}/login`, credentials);
  }
  
  logout() {
    this.removeItem('token');
    this.router.navigate(['/login']);
  }

  register(user: CreateUserDto): Observable<any> {
    return this.http.post(`http://localhost:3000${this.endpoint}/register`, user);
  }

  private getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private removeItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.getItem('token') !== null;
  }
}
