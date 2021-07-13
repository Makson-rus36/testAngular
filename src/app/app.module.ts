import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MessageComponent} from "./message/message.component";
import {RouterModule, Routes} from "@angular/router";
import {MessageModule} from "./message/message.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";
import {AuthGuard} from "./services/ AuthGuard";
import {LoginComponent} from "./login/login.component";
import {LoginModule} from "./login/login.module";
import {AuthHeaderInterceptor} from "./services/AuthHeaderInterceptor";
import { CallbackComponent } from './callback/callback.component';
import {CallbackModule} from "./callback/callback.module";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path:'messages',component: MessageComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    MessageModule,
    HomeModule,
    HttpClientModule,
    NgbModule,
    LoginModule,
    CallbackModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
