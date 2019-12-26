import { Injectable } from '@angular/core';
import {Socket} from "ng-socket-io";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) {
  }

  login(username) {
    console.log('login');
    this.socket.emit("login", username);
  }

  logout(username) {
    console.log('logout');
    this.socket.emit("logout", username);
  }

}
