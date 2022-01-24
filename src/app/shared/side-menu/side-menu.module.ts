import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './component/side-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuSubItemComponent } from './components/side-menu-sub-item/side-menu-sub-item.component';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { SideMenuHeaderHostDirective } from './directives/side-menu-header-host.directive';


@NgModule({
  declarations: [
    SideMenuComponent,
    SideMenuItemComponent,
    SideMenuSubItemComponent,
    SideMenuHeaderHostDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
