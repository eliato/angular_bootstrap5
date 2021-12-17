import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Productos } from './interfa/productos';
import { Seiddes } from './interfa/seiddes';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private REST_API_SERVER = "http://localhost:3000/products";
  REST_API_SERVER = "http://localhost:8095/api/usuarios/listar/";

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

   GetUsuarios(){
    return this.httpClient.get<any[]>(this.REST_API_SERVER);
  }
}

