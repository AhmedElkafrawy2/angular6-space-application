import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // auth service to handle browser login user that insert the key indicator to the Browser memory
  // stores will re[lace this default implementation

  private isUserLogin = false;

  getUserStatus() {
    return this.isUserLogin;
  }
  setUserStatus(status: boolean) {
    this.isUserLogin = status;
  }
  constructor() { }
}
