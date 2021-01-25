import {compileInjectable} from "@angular/compiler";
import {Injectable} from "@angular/core";

@Injectable()
export class AboutService {
  info= {
    name : "Ridha",
    email : "touffaha.ridha@gmail.com",
    telephone : 27291436
  }
  comments = [
    {date :new Date(),message : "A" },
    {date :new Date(),message : "B" },
    {date :new Date(),message : "C" }
  ];

  AddComment(c) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllcomments() {
    return this.comments;
  }
  getinfo() {
    return this.info;
  }


}
