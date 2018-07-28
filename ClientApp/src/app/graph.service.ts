import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../node_modules/@microsoft/microsoft-graph-types';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private base_url = 'https://graph.microsoft.com/v1.0';
  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get<User>(`${this.base_url}/me`);
  }
}
