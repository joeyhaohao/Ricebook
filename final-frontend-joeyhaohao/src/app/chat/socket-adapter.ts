import { ChatAdapter, IChatGroupAdapter, User, Group, Message, ChatParticipantStatus, ParticipantResponse, ParticipantMetadata, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { map, catchError } from 'rxjs/operators';
import { Socket } from 'ng-socket-io';
import {HttpClient} from "@angular/common/http";

// export class SocketAdapter extends ChatAdapter implements IChatGroupAdapter {
export class SocketAdapter extends ChatAdapter {
  private socket: Socket;
  private userId: string;
  private http: HttpClient;
  // private server = "http://localhost:3000";
  private server = "https://yz157-ricebook.herokuapp.com";

  constructor(userId: string, socket: Socket, http: HttpClient) {
    super();
    this.socket = socket;
    this.userId = userId;
    this.http = http;
    this.initSocketListeners();
  }

  // public static mockedParticipants: IChatParticipant[] = [
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 1,
  //     displayName: "Arya Stark",
  //     avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
  //     status: ChatParticipantStatus.Online
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 2,
  //     displayName: "Cersei Lannister",
  //     avatar: null,
  //     status: ChatParticipantStatus.Online
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 3,
  //     displayName: "Daenerys Targaryen",
  //     avatar: "https://68.media.tumblr.com/avatar_d28d7149f567_128.png",
  //     status: ChatParticipantStatus.Busy
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 4,
  //     displayName: "Eddard Stark",
  //     avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
  //     status: ChatParticipantStatus.Offline
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 5,
  //     displayName: "Hodor",
  //     avatar: "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg",
  //     status: ChatParticipantStatus.Offline
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 6,
  //     displayName: "Jaime Lannister",
  //     avatar: "https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg",
  //     status: ChatParticipantStatus.Busy
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 7,
  //     displayName: "John Snow",
  //     avatar: "https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg",
  //     status: ChatParticipantStatus.Busy
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 8,
  //     displayName: "Lorde Petyr 'Littlefinger' Baelish",
  //     avatar: "http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png",
  //     status: ChatParticipantStatus.Offline
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 9,
  //     displayName: "Sansa Stark",
  //     avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
  //     status: ChatParticipantStatus.Online
  //   },
  //   {
  //     participantType: ChatParticipantType.User,
  //     id: 10,
  //     displayName: "Theon Greyjoy",
  //     avatar: "https://thumbnail.myheritageimages.com/502/323/78502323/000/000114_884889c3n33qfe004v5024_C_64x64C.jpg",
  //     status: ChatParticipantStatus.Away
  //   }];

  listFriends(): Observable<ParticipantResponse[]> {
    return this.http.get(this.server+'/chatFriends', { withCredentials: true }).pipe(
      map(res => {
        const friendList = res['friendList'];
        console.log(friendList);
        if (friendList instanceof Array) {
          let response = [];
          friendList.forEach(friend => {
            let user = {
              participantType: ChatParticipantType.User,
              id: friend.id,
              displayName: friend.username,
              avatar: friend.avatar,
              status: friend.onlineStatus,
            };
            let participantResponse = new ParticipantResponse();
            participantResponse.participant = user;
            participantResponse.metadata = {
              totalUnreadMessages: Math.floor(Math.random() * 10)
            };
            response.push(participantResponse);
          });
          return response;
        }
      })
    )
  }

  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message: "Hi there. Let chat!",
        dateSent: new Date()
      }
    ];

    return of(mockedHistory).pipe(delay(2000));
  }

  sendMessage(message: Message): void {
    this.socket.emit("sendMessage", message);
  }

  initSocketListeners(): void {
    this.socket.on("messageReceived", (messageWrapper) => {
      // Handle the received message to ng-chat
      this.onMessageReceived(messageWrapper.user, messageWrapper.message);
    });

    this.socket.on("friendListUpdate", (socketUsers: Array<ParticipantResponse>) => {
      console.log("update");
      // Trigger update of friends list
      this.listFriends().subscribe(response => {
        this.onFriendsListChanged(response);
      });
    });
  }
  // groupCreated(group: Group): void {
  //   SocketAdapter.mockedParticipants.push(group);
  //
  //   SocketAdapter.mockedParticipants = SocketAdapter.mockedParticipants.sort((first, second) =>
  //     second.displayName > first.displayName ? -1 : 1
  //   );
  //
  //   // Trigger update of friends list
  //   this.listFriends().subscribe(response => {
  //     this.onFriendsListChanged(response);
  //   });
  // }
}
