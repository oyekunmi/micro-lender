import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { 
  HttpTokenInterceptor, 
  Http401Interceptor 
} from './interceptors';

import {
  ApiService,
  JwtService, 
  AuthGuard,
  UserService,
  RoleGuard,
  CustomerService
} from './services';

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
    CustomerService
  ],
  declarations: []
})
export class CoreModule { }
