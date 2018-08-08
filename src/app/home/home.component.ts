import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GraphSdkService } from '../services/graph-sdk.service';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private graphSdkService: GraphSdkService, private graphService: GraphService, private authService: AuthService) { }

  callGraphWithGraphClient() {
    this.graphSdkService.client
      .api('/me')
      .get((err, res) => {
        console.log(res);
      });
  }

  callGraphWithHttpClient() {
    this.graphService.getCurrentUser()
      .subscribe((user) => {
        console.log(user);
      });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
