import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable()

export  class GalleryService{
  constructor(private http: HttpClient) {

  }

  search(motCle:string,size:number,page:number) {
    return this.http.get("https://pixabay.com/api/?key=19742024-69ab1df9904302d9706bd0c71&q="+motCle
      + "&per_page=" + size + "&page=" + page) ;
      };









}
