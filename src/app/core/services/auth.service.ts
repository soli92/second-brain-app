import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //* attributi/variabili
  public isAuthenticated: BehaviorSubject<any> | null = null;

  constructor() { }

  // Metodi

  public login() {}

  private parseUsername() {}
}
