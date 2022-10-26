import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registeredUsers: { username: string, psw: string }[] = [
    {
      username: 'testUser',
      psw: '1234'
    },
  ];

  constructor() { }

  login(username: string, password: string) {
    for (let user of this.registeredUsers) {
      if (user.username === username.trim() && user.psw === password.trim()) {
        return 200;
      }
    }
    return 403;
  }
}
