import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./services/SecurityService";
import randomInteger from "random-int";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthValue = false;
  constructor(private securityService:SecurityService) {
  }
  ngOnInit(): void {
    this.isAuthValue = this.securityService.isLoggedIn();
  }

}
