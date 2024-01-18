import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Environment
import { environment } from '../../../../environments/environment';

// Model
import { Role } from '../../models/user/role.model';


@Injectable()
export class RoleService {

  constructor(private http: HttpClient) {

  }

  getAll() : Observable<{ data: Role []}> {
    const url = environment.apiUrl + 'roles';
    return this.http.get<{ data: Role []}>(url);
  }

  getById(id: number) : Observable<Role> {
    const url = environment.apiUrl + 'roles/' + id.toString();
    return this.http.get<Role>(url);
  }
}
