import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanelService } from 'src/app/shared/services/overlay-panel.service';
import { NavigationSideMenuComponent } from '../../navigation-side-menu/navigation-side-menu.component';
import { OverlayPanelConfigModel } from '../../overlay-panel/models/overlay-panel.models';

@Component({
  selector: 'm2b-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private overlayPanelService: OverlayPanelService
  ) { }

  ngOnInit(): void {
  }

  public navigateToLogin() {
    this.router.navigate(['login'])
  }

  public openNavMenu() {
    const config = new OverlayPanelConfigModel();
    config.component = NavigationSideMenuComponent;
    config.isOpen = true;
    this.overlayPanelService.panelSubject$.next(config);
    //this.overlyPanelService.open(userSideMenuComponent);
  }

}
