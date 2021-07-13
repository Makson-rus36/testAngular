import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MessageModel} from "../models/message.model";
import {SecurityService} from "./SecurityService";
import {environment} from "../../environments/environment";

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient, private securityService: SecurityService) {
  }

  public getMessages(){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    return this.httpClient.get(environment.baseUrl+"/v1/message/", {headers:headers})
  }
  public updateMessages(message:MessageModel){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    const body={
      "id":message.id,
      "text":message.text
    }
    return this.httpClient.put(environment.baseUrl+"/v1/message/"+message.id, body,{headers:headers})
  }
  public saveMessages(message:MessageModel){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    const body={
      "id":message.id,
      "text":message.text
    }
    return this.httpClient.post(environment.baseUrl+"/v1/message/"+message.id, body,{headers:headers})
  }

  public deleteMessage(message:MessageModel){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    return this.httpClient.delete(environment.baseUrl+"/v1/message/"+message.id,{headers:headers})
  }
}
