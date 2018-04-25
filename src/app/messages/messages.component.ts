import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // inject the message service and create a message singleton
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
