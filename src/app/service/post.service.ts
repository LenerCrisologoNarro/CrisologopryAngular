import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {PersonalInterface} from "../interfaces/personal-interface";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  ruta= "https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<PersonalInterface[]>(this.ruta);
  }

}
