import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGurdService {
  private url: string = 'api/auth';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  public jwt_decodes: any = jwt_decode;

  constructor() {}

  getToken(): any {
    return localStorage.getItem('bootManager');
  }

  getTokenExpirationDate(token: string): any {
    // @ts-ignore
    let decoded: any = jwt_decode(token, {
      header: false,
    });

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: any): boolean {
    if (!token) token = this.getToken();
    console.log(token , "datetime")
    if (!token) return false;

    let datetime =  localStorage.getItem('datetime');
    console.log(datetime , "datetime")
    if (!datetime) return false;


    const date = this.getTokenExpirationDate(datetime);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
}
