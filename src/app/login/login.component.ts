import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../services/SecurityService";
import {Router} from "@angular/router";
import {interval} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {

  }
  login() {
    this.securityService.login();
  }
}
