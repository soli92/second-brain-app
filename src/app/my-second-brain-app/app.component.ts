import { Component } from '@angular/core';
import { AuthService } from '../core/auth/service/auth.service';

@Component({
  selector: 'm2b-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-second-brain';

  constructor(
    private authService: AuthService
  ) {}
}
