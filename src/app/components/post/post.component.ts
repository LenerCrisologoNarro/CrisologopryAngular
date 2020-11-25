import { Component, OnInit } from '@angular/core';
import { PostService } from "../../service/post.service";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 title="postComponent";
 listapersonal:any=[];
  constructor(private postpersonal:PostService) { }

  ngOnInit(): void {
    this.getAllpersonal();
  }
getAllpersonal(){
  this.postpersonal.getAll().subscribe(personal=>{
    this.listapersonal=personal
  })
}
}
