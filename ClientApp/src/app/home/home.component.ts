import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GraphSdkService } from '../services/graph-sdk.service';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService: AuthService, 
    private graphSdkService: GraphSdkService, 
    private graphService: GraphService) {}

  getAuthToken() {
    this.authService.getAuthenticationToken()
      .then((token) => console.log('here is the auth token: ', token));
  }

  callGraphWithGraphClient() {
    this.graphSdkService.client
      .api('/me')
      .get((err, res) => {
        console.log(res);
      })
  }

  callGraphWithHttpClient() {
    this.graphService.getCurrentUser()
      .subscribe((user) => {
        console.log(user);
        console.log(user.jobTitle);
      })
  }

}
