import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface State {
  email?: string,
}

@Injectable()
export class AuthService {

  state = new BehaviorSubject<State>({});

  isLoggedIn$ = this.state.pipe(map(state => !!state.email));

  logIn() {
    this.state.next({...this.state.value});
  }
}