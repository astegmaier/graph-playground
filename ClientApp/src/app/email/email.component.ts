import { Component, OnInit } from '@angular/core';
import { Message, EmailAddress } from '@microsoft/microsoft-graph-types';
import { Observable } from 'rxjs';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html'
})
export class EmailComponent {

  public messages: Observable<Message[]>;
  public columnsToDisplay = ['date','from','subject'];
  constructor( private graphService: GraphService) { 
    this.messages = this.graphService.getMessages(10);
    this.messages.subscribe();
  }

}
