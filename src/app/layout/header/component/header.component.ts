import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { OverlayPanelService } from 'src/app/shared/services/overlay-panel.service';
import { NavigationSideMenuComponent } from '../../navigation-side-menu/navigation-side-menu.component';
import { OverlayPanelConfigModel } from '../../overlay-panel/models/overlay-panel.models';

@Component({
  selector: 'm2b-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public currentUrl: string;
  public sectionTitle: string;

  constructor(
    private router: Router,
    private overlayPanelService: OverlayPanelService
  ) { }

  ngOnInit(): void {
    this.router.events
        .subscribe(
          event => {
            switch (true) {
              case event instanceof NavigationEnd:
                this.currentUrl = (event as RouterEvent).url;
                console.log('CURRENT ROUTE', this.currentUrl);
                switch (this.currentUrl) {
                  case '/books':
                    this.sectionTitle = 'My Books'
                  break;

                  case '/jokes':
                    this.sectionTitle = 'Chuck Norris Jokes'
                  break;

                  default:
                    this.sectionTitle = 'Soli Second Brain'
                  break;
                }
              break
            }
          }
        )
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
