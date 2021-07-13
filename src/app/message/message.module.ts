import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MessageComponent} from "./message.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations:[MessageComponent],
  exports:[MessageComponent],
  bootstrap:[MessageComponent]
})

export class MessageModule {}
