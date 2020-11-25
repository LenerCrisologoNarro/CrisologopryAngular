import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { PeruInterface } from '../interfaces/peru-interface';

@Injectable({
  providedIn: 'root'
})
export class PeruService {
ruta="https://restcountries.eu/rest/v2/name/peru?fullText=true"
  constructor(private http:HttpClient) { }
  getAll(){ return this.http.get<PeruInterface[]>(this.ruta);}
}
