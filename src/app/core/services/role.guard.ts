import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class RoleGuard implements CanActivate {

  // @TODO https://www.npmjs.com/package/ngx-permissions
  private roles: Array<string> = ['CUSTOMER','TELLER', 'MERCHANT'];
  constructor(private userService: UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const roles: string[] = next.data.roles;
    const userRoles: string[] = this.userService.getCurrentUser().roles;

    //check if the passed roles are valid roles
    if(!userRoles || !roles || !roles.every( r => this.roles.includes(r.toUpperCase()))) return false;

    return userRoles.some( r => roles.includes(r.toUpperCase()));
  }
}
