import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, Contact, Message, DriveItem } from '@microsoft/microsoft-graph-types';
import { throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

// tslint:disable-next-line:class-name
interface oDataResponse<T> {
  '@odata.context': string;
  '@odata.nextLink': string;
  value: T;
}

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private base_url = 'https://graph.microsoft.com/v1.0';
  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get<User>(`${this.base_url}/me`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getContacts(top?: number) {
    let url = `${this.base_url}/me/contacts`;
    if (top) {
      url = url + `?$top=${top}`;
    }
    return this.http.get<oDataResponse<Contact[]>>(url)
    .pipe(
      retry(3),
      catchError(this.handleError),
      map(response => response.value)
    );
  }

  getMessages(top?: number) {
    let url = `${this.base_url}/me/messages`;
    if (top) {
      url = url + `?$top=${top}`;
    }
    return this.http.get<oDataResponse<Message[]>>(url)
    .pipe(
      retry(3),
      catchError(this.handleError),
      map(response => response.value)
    );
  }

  getRecentWorkbooks() {
    const url = `${this.base_url}/me/drive/recent`;
    return this.http.get<oDataResponse<DriveItem[]>>(url)
    .pipe(
      retry(3),
      catchError(this.handleError),
      map(response =>
        response.value
          .filter(item => item.name && item.name.substr(item.name.length - 4, item.name.length) === 'xlsx')
          .sort((a, b) => {
            return new Date(b.lastModifiedDateTime).getTime() - new Date(a.lastModifiedDateTime).getTime();
          })
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
