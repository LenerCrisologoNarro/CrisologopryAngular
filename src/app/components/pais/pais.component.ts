import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
title: "paisComponents";
listapaises:any=[];

  constructor(private paispersonal:PaisService) { }

  ngOnInit(): void {
    this.paispersonal.getAll().subscribe(papersonal => 
      {
        this.listapaises = papersonal
      });
    
  }

}
