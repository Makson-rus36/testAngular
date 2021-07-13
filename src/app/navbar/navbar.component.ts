import {Component, Input, OnInit} from '@angular/core';
import {SecurityService} from "../services/SecurityService";
import {Router} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  name:string;
  @Input() isAuth:boolean = false;
  constructor(private securityService: SecurityService, private router:Router) {
    this.name="";

  }

  ngOnInit(): void {
    if(this.isAuth)
    {
      this.securityService.getUserInfo().subscribe(data => this.name = data.name);
    }
  }
  login() {
    this.securityService.login();
    let intr = interval(10).subscribe(
      x=>{
        this.isAuth = this.securityService.isLoggedIn();
        if(this.isAuth)
          intr.unsubscribe();
      }
    )
  }
  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      this.isAuth=false;
      this.router.navigate(['/home']);
    });
  }

}
