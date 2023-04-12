import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthLibService {
  private userName: string;

  public get user(): string {
    return this.userName;
  }

  constructor() { }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }

  public setUserName(key: string, userName: string) {
    localStorage.setItem(key, userName);
  }

  public localStorageUserName(key: string): string {
    return localStorage.getItem(key);
  }
}
