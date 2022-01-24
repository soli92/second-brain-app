import { Component, OnInit } from '@angular/core';
import { SidemenuConfigModel, SidemenuItemOnClickFnModel } from 'src/app/shared/side-menu/models/side-menu.models';
import { navSideMenuConfig } from './config/navigation-side-menu.config';

@Component({
  selector: 'm2b-navigation-side-menu',
  templateUrl: './navigation-side-menu.component.html',
  styleUrls: ['./navigation-side-menu.component.scss']
})
export class NavigationSideMenuComponent implements OnInit {
  public config: SidemenuConfigModel = navSideMenuConfig;

  constructor() { }

  ngOnInit(): void {
  }

  public execItemClickFn(fnObj: SidemenuItemOnClickFnModel) {
    this[fnObj.name]();
  }

}
