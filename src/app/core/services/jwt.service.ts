import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class JwtService {

  getToken(): Observable<string | null> {
    const data = window.localStorage['jwtToken'];
    return data ? of(data): of(null);
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
