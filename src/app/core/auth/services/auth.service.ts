import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';

import dbJson from '../../../../assets/db.json';
import { userDataKey } from '../../local-storage/constants/storage-keys.constants';
import { LocalStorageService } from '../../local-storage/service/local-storage.service';
import { APP_ROUTE_LOGIN_PATH } from '../models/auth-path/auth-path.constants';
import { LoginModel } from '../models/login/login.models';
import { CognitoAuthService } from './cognito/cognito-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //* attributi/variabili
  //public isAuthenticated: BehaviorSubject<any> | null = null;

  private authDb = dbJson.auth;

  constructor(
    private cognitoAuthService: CognitoAuthService,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    private router: Router,
    private socialAuthService: SocialAuthService,
  ) { }

  // Metodi

  public login() {
    this.cognitoAuthService.federatedLogin();
  }

  public loginWithCognito(requestModel: LoginModel) {
    this.cognitoAuthService.login(requestModel);
  }

  public loginWithGoogle() {
    this.cognitoAuthService.federatedLogin();
    
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //   .then(
    //     (res: SocialUser) => {
    //       console.log('SOCIAL USER', res);
    //       if (res) this.localStorageService.setData(userDataKey, res);
    //       this.router.navigate(['home']);
    //     }
    //   )
    //   .catch(
    //     (error) => {
    //       this.notificationService.error('Something went wrong with Google Sign In: ' + error, 3000);
    //     }
    //   );
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

  public async isAuthenticated(redirectToLogin: boolean = true): Promise<boolean | UrlTree> {
    const isAuthenticatedFn = () => this.cognitoAuthService.isAuthenticated();
    const authFailedFn = 
      (resolve: (UrlTree)=> void, reject: () => void) => {
        if(redirectToLogin) {
          console.info('AuthService', 'redirect to:', APP_ROUTE_LOGIN_PATH);
          resolve(this.router.parseUrl(APP_ROUTE_LOGIN_PATH));
        }
        else reject();
      };

    return new Promise<boolean>(
      (resolve, reject) => {
        isAuthenticatedFn()
          .then(
            value => {
              if (value) resolve(true);
              else authFailedFn(resolve, ()=> reject('Not Authenticated'))
            }
          )
          .catch(
            error => authFailedFn(resolve, () => reject(error))
          )
      }
    )
  }
}
