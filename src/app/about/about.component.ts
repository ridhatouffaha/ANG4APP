import { Component, OnInit } from '@angular/core';
import {AboutService} from "../../service/About.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos: {name:string,email:string,telephone:number};
  comments=[];
 commentaire ={date:null,message:""};
  constructor(private aboutService :AboutService ) {
    this.infos = this.aboutService.getinfo();
    this.comments = this.aboutService.getAllcomments();
  }

  ngOnInit(): void {
  }
  onAddComentaire(c) {
    this.aboutService.AddComment(c);
    this.commentaire.message="";
    this.comments=this.aboutService.getAllcomments();

  }
}
