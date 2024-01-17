import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Environment
import { environment } from '../../../../environments/environment';

// Model
import { User } from './../../models/user/user.model';


@Injectable()
export class RoleService {

  constructor(private http: HttpClient) {

  }

  getAll() : Observable<{ data: User []}> {
    const url = environment.apiUrl + 'roles';
    return this.http.get<{ data: User []}>(url);
  }

  getById(id: number) : Observable<User> {
    const url = environment.apiUrl + 'roles/' + id.toString();
    return this.http.get<User>(url);
  }
}
