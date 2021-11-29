import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from './interfa/productos';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get<Productos[]>(this.REST_API_SERVER);
  }
}

