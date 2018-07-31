import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Client } from '@microsoft/microsoft-graph-client/lib/src';

@Injectable({
  providedIn: 'root'
})
export class GraphSdkService {

  public client: Client;
  constructor(private authService: AuthService) {
    this.client = Client.init({
      authProvider: (done) => {
        this.authService.getAuthenticationToken()
          .then(token => done(null, token))
          .catch(err => done(err, null));
      }
    });
  }
}
