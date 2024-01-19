import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Environment
import { environment } from '../../../../environments/environment';

// Model
import { User } from './../../models/user/user.model';
import { Role } from '../../models/user/role.model';


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

  roles() : Observable<{ data: Role [] }> {
    const url = environment.apiUrl + 'auth/roles';
    return this.http.get<{ data: Role [] }>(url);
  }

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  removeData() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('admin');
  }

  getToken() : string | null {
    return sessionStorage.getItem('token');
  }

  isAuthed() : boolean {
    return (this.getToken() != null);
  }

  isAdmin() : boolean {
    return (sessionStorage.getItem('admin') == 'true');
  }

  setAdmin(admin: boolean) {
    sessionStorage.setItem('admin', admin.toString());
  }
}
