import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import {GalleryService} from "../../service/Gallery.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagephotos:any;
  Purl:any;
  pages :Array<number> =[];
  totalPages:number;
  size:number= 10;
  currentPage:number = 1;
  motCle:string="";

  constructor(private galleryService:GalleryService) {



  }

  ngOnInit(): void {
  }

  // @ts-ignore
   onSearch(dataForm) {
   this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
   .toPromise().then(data=>{
     this.pagephotos=data;
     this.totalPages = Math.trunc( data.totalHits / this.size);
     if ((data.totalHits % this.size) !=0)  ++this.totalPages;
     console.log(this.totalPages);
     console.log(data);

     this.pages =new Array(this.totalPages);

   }, err => {
     console.log(err);

   });


  }

  goTopage(i){
    this.currentPage = i+1;
    this.onSearch( {motCle : this.motCle  } );
  }

  carDclass(i){
    if (this.currentPage == i + 1 ) {
         return 'active:true';
    }
  }
}
