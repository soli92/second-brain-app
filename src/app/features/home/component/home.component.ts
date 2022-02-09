import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { UserData } from 'src/app/core/user-session/models/user-session.models';
import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';

@Component({
  selector: 'm2b-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: UserData;

  constructor(
    private authService: AuthService,
    private userSessionService: UserSessionService
  ) { }

  ngOnInit(): void {
    this.user = this.userSessionService.getUserData();
  }

  public logout() {
    this.authService.logout();
    this.userSessionService.setSessionData(null);
  }

}
