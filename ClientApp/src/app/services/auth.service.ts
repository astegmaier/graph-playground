import { Injectable } from '@angular/core';

import * as Msal from 'msal';
import { User } from 'msal/lib-commonjs/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = '50c765ed-997a-4cc5-a2fb-0d4a27e737ef';
  private graphScopes = [
    'User.Read',
    'User.ReadBasic.All',
    'Mail.Send',
    'Contacts.ReadWrite',
    'Files.ReadWrite',
    'Mail.ReadWrite'
  ];
  private clientApplication: Msal.UserAgentApplication;

  constructor() {
    this.clientApplication = new Msal.UserAgentApplication(
      this.clientId,
      null,
      this.authCallback
    );
   }

   public login(): void {
    this.clientApplication.loginRedirect(this.graphScopes);
  }

  public logout(): void {
    this.clientApplication.logout();
  }

  public isLoggedIn(): boolean {
    return this.clientApplication.getUser() != null;
  }

  public getUser(): User {
    return this.clientApplication.getUser();
  }

  public getAuthenticationToken(): Promise<string> {
    return this.clientApplication.acquireTokenSilent(this.graphScopes)
      .then(token => {
        // console.log('Got silent access token: ', token);
        return token;
      }).catch(error => {
        console.error('Could not silently retrieve token from storage.', error);
        return this.clientApplication.acquireTokenPopup(this.graphScopes)
          .then(token => {
            // console.log('Got popup access token: ', token);
            return Promise.resolve(token);
          }).catch(innererror => {
            console.error('Could not retrieve token from popup.', innererror);
            return Promise.resolve('');
          });
      });
  }

   private authCallback(errorDesc: any, token: any, error: any, tokenType: any) {
    console.log('Auth callback');
    if (token) {
      console.log('Got token: ', token);
    } else {
      console.log(error + ':' + errorDesc);
    }
  }
}
