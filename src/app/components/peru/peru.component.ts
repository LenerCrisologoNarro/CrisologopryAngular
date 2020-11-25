import { Component, OnInit } from '@angular/core';
import { PeruService } from '../../service/peru.service';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {
title="peruComponent";
listaperu:any=[];
  constructor(private perupersonal:PeruService) {}
    
  ngOnInit(): void {
    this.getAllperu();
  }
getAllperu(){
 this.perupersonal.getAll().subscribe(ppersonal =>{
this.listaperu=ppersonal
 })
  
}
}
