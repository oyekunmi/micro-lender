import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { take, map } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private jwtService: JwtService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.jwtService.getToken().pipe(
      map(token => {
        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }),
      take(1)
    );

  }
}
