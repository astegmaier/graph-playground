import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { GraphSdkService } from '../graph-sdk.service';
import { GraphService } from '../graph.service';

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
