import { Component } from '@angular/core';
import { Contact, EmailAddress } from '@microsoft/microsoft-graph-types';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  public contacts: Contact[];
  public columnsToDisplay = ['givenName','surname','company','email'];
  constructor( private graphService: GraphService) { 
    this.graphService.getContacts(10).subscribe(contacts => this.contacts = contacts);
  }
  combineEmail(emailAddresses: EmailAddress[]): string {
    return emailAddresses.reduce(
      (accumulator, current) => accumulator.concat(current.address),
      ''
    );
  }
}
