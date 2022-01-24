import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { OverlayPanelModule } from './overlay-panel/overlay-panel.module';
import { NavigationSideMenuComponent } from './navigation-side-menu/navigation-side-menu.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationSideMenuComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    OverlayPanelModule,
    SharedModule
  ],
  exports: [
    HeaderModule,
    NavigationSideMenuComponent,
    OverlayPanelModule
  ]
})
export class LayoutModule { }
