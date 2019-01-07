import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { JwtService } from '../services';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class Http401Interceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private router: Router,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError( (error, caught) => {
        if(error instanceof HttpErrorResponse && error.status === 401){
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
