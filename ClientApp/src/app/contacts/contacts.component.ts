import { Component } from '@angular/core';
import { Contact, EmailAddress } from '@microsoft/microsoft-graph-types';
import { GraphService } from '../services/graph.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  public contacts: Observable<Contact[]>;
  public columnsToDisplay = ['givenName','surname','company','email'];
  constructor( private graphService: GraphService) { 
    this.contacts = this.graphService.getContacts(10);
    this.contacts.subscribe();
  }
  combineEmail(emailAddresses: EmailAddress[]): string {
    return emailAddresses.reduce(
      (accumulator, current) => accumulator.concat(current.address),
      ''
    );
  }
}
