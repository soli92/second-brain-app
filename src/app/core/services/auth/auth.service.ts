import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../../models/login/login.models';

import dbJson from '../../../../assets/db.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //* attributi/variabili
  public isAuthenticated: BehaviorSubject<any> | null = null;

  private authDb = dbJson.auth;

  constructor() { }

  // Metodi

  public login(requestModel: LoginModel) {
    const authentication = new Observable(
        (observer) => {
          setTimeout(
            () => {
              const res = this.authDb.find(
                el => el.username === requestModel.username && el.password === requestModel.password
              )
      
              if (res !== undefined) observer.next(res);
              else observer.error('AUTHENTICATION FAILED');
            },
            5000
          )
        }
    )

    return authentication;
  }

  private parseUsername() {}
}
