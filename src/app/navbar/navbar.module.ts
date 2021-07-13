import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [BrowserModule, FormsModule,NgbModule],
  declarations:[NavbarComponent],
  exports:[NavbarComponent],
  bootstrap:[NavbarComponent]
})

export class NavbarModule {}
