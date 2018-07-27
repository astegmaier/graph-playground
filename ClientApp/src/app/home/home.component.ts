import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService: AuthService, private graphService: GraphService) {}
  getAuthToken() {
    this.authService.getAuthenticationToken()
      .then((token) => console.log('here is the auth token: ', token));
  }

  callGraph() {
    this.graphService.client
      .api('/me')
      .get((err, res) => {
        console.log(res);
      })
  }

}
