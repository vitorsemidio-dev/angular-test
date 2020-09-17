import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate() {
    localStorage.setItem('user', 'Emidio');
  }

  checkAuthentication() {
    const userLoggedIn = localStorage.getItem('user');

    const isAuthenticate = userLoggedIn === 'Emidio';
    return isAuthenticate;
  }
}
