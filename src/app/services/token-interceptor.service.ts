import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dir } from 'console';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("==========================")
    console.log(request)
    request = request.clone({
      setHeaders: {
        'Authorization' :`Bearer: ${this.authService.getToken()}`,
      }
    });
    return next.handle(request);
  }
}
