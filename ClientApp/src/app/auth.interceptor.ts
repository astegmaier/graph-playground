import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, from } from "rxjs";
import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/observable/fromPromise';
// import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor (private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({ setHeaders: { Authorization: `asdfasdfasdfasdf` } });
        
        return next.handle(authReq);
        // return from(this.authService.getAuthenticationToken()).pipe(
        //     switchMap(token => {
        //         req = req.clone({
        //             setHeaders: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         });
        //         return next.handle(req);
        //     })
        // );
    }
}