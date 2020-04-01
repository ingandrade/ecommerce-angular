import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../interface/product';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private localUrl = 'http://localhost:3000';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // Get all Product
  getAllProduct(): Observable<Product> {
    return this.http.get<Product>(this.localUrl + '/Product/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Get Product By Id
  getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.localUrl + '/Product/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  CreateProduct(data): Observable<Product> {
    return this.http.post<Product>(this.localUrl + '/Product/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateProduct(id, data): Observable<Product> {
    return this.http.put<Product>(this.localUrl + '/Product/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
