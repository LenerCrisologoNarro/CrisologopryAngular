import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { PaisInterface } from '../interfaces/pais-interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  ruta="https://restcountries.eu/rest/v2/all"

  constructor( private http:HttpClient) { }
  getAll(){ return this.http.get<PaisInterface[]>(this.ruta);}
}
