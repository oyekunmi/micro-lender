import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class JwtService {

  getToken(): Observable<string | null> {
    const data = localStorage.getItem('jwtToken');
    return data ? of(data): of(null);
  }

  saveToken(token: string): Observable<string> {
    localStorage.setItem('jwtToken', token);
    return of(token);
  }

  destroyToken(): Observable<boolean> {
    localStorage.removeItem('jwtToken');
    return of(true);
  }

}
