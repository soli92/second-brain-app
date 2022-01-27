import { Injectable } from '@angular/core';
import { authTokenKey, userDataKey } from '../../local-storage/constants/storage-keys.constants';
import { LocalStorageService } from '../../local-storage/service/local-storage.service';
import { AuthToken, UserData } from '../models/user-session.models';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public setSessionData(res) {
    const userData: UserData = res;
    this.localStorageService.setData(userDataKey, res);
    this.setAuthToken(userData);
  }

  public getAuthToken(): AuthToken {
    return this.localStorageService.getData(authTokenKey);
  }

  public getUserData(): UserData {
    return this.localStorageService.getData(userDataKey);
  }

  private setAuthToken(userData: UserData): void {
    if (userData && userData.response) {
      const authToken: AuthToken = userData.response;
      this.localStorageService.setData(authTokenKey, authToken);
    }
  }

}
