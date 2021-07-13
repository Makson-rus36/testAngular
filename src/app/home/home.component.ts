
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {SecurityService} from "../services/SecurityService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:any;

  constructor(private http: HttpClient, private securityService: SecurityService,
              private router: Router) {
  }

  ngOnInit(): void {

  }


}
