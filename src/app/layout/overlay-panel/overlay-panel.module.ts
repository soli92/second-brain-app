import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelComponent } from './component/overlay-panel.component';
import { OverlayPanelDirective } from './directive/overlay-panel.directive';



@NgModule({
  declarations: [
    OverlayPanelComponent, 
    OverlayPanelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayPanelComponent
  ]
})
export class OverlayPanelModule { }
