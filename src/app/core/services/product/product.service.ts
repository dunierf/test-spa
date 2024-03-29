import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Environment
import { environment } from '../../../../environments/environment';

// Model
import { Product } from './../../models/product/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getAll() : Observable<{ data: Product []}> {
    const url = environment.apiUrl + 'products';
    return this.http.get<{ data: Product []}>(url);
  }

  getById(id: number) : Observable<Product> {
    const url = environment.apiUrl + 'products/' + id.toString();
    return this.http.get<Product>(url);
  }

  post(product: Product) : Observable<Product> {
    const url = environment.apiUrl + 'products';
    return this.http.post<Product>(url, product);
  }

  put(product: Product) : Observable<Product> {
    const url = environment.apiUrl + 'products/' + product.id;
    return this.http.put<Product>(url, product);
  }

  delete(id: number) : Observable<null> {
    const url = environment.apiUrl + 'products/' + id.toString();
    return this.http.delete<null>(url);
  }
}
