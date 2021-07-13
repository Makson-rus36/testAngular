import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CallbackComponent} from "./callback.component";


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations:[CallbackComponent],
  exports:[CallbackComponent],
  bootstrap:[CallbackComponent]
})

export class CallbackModule {}
