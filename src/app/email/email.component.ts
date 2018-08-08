import { Component, OnInit } from '@angular/core';
import { Message } from '@microsoft/microsoft-graph-types';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html'
})
export class EmailComponent {

  public messages: Message[];
  public columnsToDisplay = ['date', 'from', 'subject'];
  constructor( private graphService: GraphService) {
    this.graphService.getMessages(10).subscribe(messages => this.messages = messages);
  }

  public getFromEmail(message: Message): string {
    if (message.from && message.from.emailAddress && message.from.emailAddress.address) {
      return message.from.emailAddress.address;
    } else {
      return '';
    }
  }

}
