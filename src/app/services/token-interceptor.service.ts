import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("==========================");
    console.log(request);
    console.log("==========================");
    request = request.clone({
      setHeaders: {
        'Authorization' :`Bearer: ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type',
      }
    });
    return next.handle(request);
  }
}
