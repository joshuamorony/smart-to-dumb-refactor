import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginWithGoogle() {
    return of({});
  }
}
