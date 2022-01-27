import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';

import dbJson from '../../../../assets/db.json';
import { userDataKey } from '../../local-storage/constants/storage-keys.constants';
import { LocalStorageService } from '../../local-storage/service/local-storage.service';
import { LoginModel } from '../models/login/login.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //* attributi/variabili
  public isAuthenticated: BehaviorSubject<any> | null = null;

  private authDb = dbJson.auth;

  constructor(
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    private router: Router,
    private socialAuthService: SocialAuthService,
  ) { }

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

  public loginWithGoogle() {
    
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(
        (res: SocialUser) => {
          console.log('SOCIAL USER', res);
          if (res) this.localStorageService.setData(userDataKey, res);
          this.router.navigate(['home']);
        }
      )
      .catch(
        (error) => {
          this.notificationService.error('Something went wrong with Google Sign In: ' + error, 3000);
        }
      );
  }

  public logoutWithGoogle() {
    this.socialAuthService
      .signOut()
      .then( 
        res => {
          this.localStorageService.removeData(userDataKey);
          this.router.navigate(['login']);
        }
      )
  }

  private parseUsername() { }
}
