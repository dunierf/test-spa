import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Environment
import { environment } from '../../../../environments/environment';

// Model
import { User } from './../../models/user/user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string) : Observable<{ token: string }> {
    const url = environment.apiUrl + 'auth/login';
    return this.http.post<{ token: string }>(url, { email: email, password: password });
  }

  logout() : Observable<any> {
    const url = environment.apiUrl + 'auth/logout';
    return this.http.delete(url);
  }

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  removeToken(token: string) {
    sessionStorage.removeItem('token');
  }

  getToken() : string | null {
    return sessionStorage.getItem('token');
  }
}
