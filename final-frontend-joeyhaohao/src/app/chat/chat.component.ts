import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { SocketAdapter } from './socket-adapter';
import {Socket} from "ng-socket-io";
import {FollowService} from "../main/follow/follow.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userId: string;
  username: string;
  adapter: ChatAdapter;
  theme = 'dark-theme';

  constructor(private socket: Socket,
              private followServ: FollowService,
              private http: HttpClient) {
    this.initSocketListeners();
  }

  public initSocketListeners(): void
  {
    console.log('init');
    this.socket.on("createSocketId", (socketId) => {
      console.log('connect');
      // Initializing the chat with the userId and the adapter with the socket instance
      this.userId = socketId;
      this.adapter = new SocketAdapter(this.userId, this.socket, this.http);
    });
  }

  ngOnInit() {
  }

}
