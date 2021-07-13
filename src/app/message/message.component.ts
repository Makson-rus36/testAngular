import { Component, OnInit } from '@angular/core';
import {MessageModel} from "../models/message.model";
import {MessageService} from "../services/message.service";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../services/SecurityService";
import {interval} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers:[MessageService]
})
export class MessageComponent implements OnInit {
  isEdit = false;
  index=-1;
  message: MessageModel = new MessageModel("","");
  messages: MessageModel[]=[];

  constructor(private messageService: MessageService, private securityService:SecurityService, private router:Router) { }

  ngOnInit(): void {
    this.getAllMessages();
    if(!this.securityService.isLoggedIn()){
      this.securityService.login();
      let intr = interval(10).subscribe(
        x=>{
          let isAuth = this.securityService.isLoggedIn();
          if(isAuth){
            window.location.reload();
            intr.unsubscribe();
          }
        }
      )
    }
  }
  getAllMessages() {
    this.messageService.getMessages().subscribe(x => {
      this.messages = <MessageModel[]>x;
    })
  }

  updateMessage(){
    this.messageService.updateMessages(this.message).subscribe(x=>{
      this.getAllMessages();
    }, error => {
      console.log(error)
    })
    this.message = new MessageModel("","")
    this.isEdit=false;
  }

  newMessage() {
    this.messageService.saveMessages(this.message).subscribe(x=>{
      this.getAllMessages();
    }, error => {
      console.log(error)
    })
    this.message = new MessageModel("","")
  }

  setIsEdit(flag:boolean) {
    this.isEdit = flag;
  }

  cancelChanges() {
    this.message = new MessageModel("","")
  }
  deleteMessage(message:MessageModel){
    this.messageService.deleteMessage(message).subscribe(x=>{
      console.log(x);
      this.getAllMessages();
    }, error => {
      console.log(error);
    });
  }

  setEditMessage(message: MessageModel) {
    this.message = new MessageModel(message.id, message.text);
  }
}
