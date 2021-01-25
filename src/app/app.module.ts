import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from "@angular/forms";
import {AboutService} from "../service/About.service";
import {Router, RouterModule, Routes} from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';
import {HttpClientModule} from "@angular/common/http";
import {GalleryService} from "../service/Gallery.service";

const routes:Routes=[
  {path:'About',component:AboutComponent},
  {path:'Contacts',component:ContactsComponent},
    {path:'Gallery',component:GalleryComponent},
  {path:'',redirectTo:'/About' ,pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [AboutService,GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
