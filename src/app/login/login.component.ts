import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../services/SecurityService";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  login() {
    this.securityService.login();
  }
}
