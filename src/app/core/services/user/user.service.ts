import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Environment
import { environment } from '../../../../environments/environment';

// Model
import { User } from './../../models/user/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  getAll() : Observable<{ data: User []}> {
    const url = environment.apiUrl + 'users';
    return this.http.get<{ data: User []}>(url);
  }

  getById(id: number) : Observable<User> {
    const url = environment.apiUrl + 'users/' + id.toString();
    return this.http.get<User>(url);
  }

  post(user: User) : Observable<User> {
    const url = environment.apiUrl + 'users';
    return this.http.post<User>(url, user);
  }

  put(user: User) : Observable<User> {
    const url = environment.apiUrl + 'users';
    return this.http.put<User>(url, user);
  }

  delete(id:number) : Observable<null> {
    const url = environment.apiUrl + 'users/' + id.toString();
    return this.http.delete<null>(url);
  }

}
