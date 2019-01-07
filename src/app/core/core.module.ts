import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  JwtService, 
  AuthGuard,
  UserService,
  RoleGuard
} from './services';
import { Http401Interceptor } from './interceptors';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Http401Interceptor, multi: true },
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
    RoleGuard,
  ],
  declarations: []
})
export class CoreModule { }
