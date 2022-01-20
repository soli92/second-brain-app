import { Injectable, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { OverlayPanelConfigModel } from '../models/overlay-panel.model';

@Injectable({
  providedIn: 'root'
})
export class OverlayPanelService {

  public panelSubject$ = new BehaviorSubject<any>(null);

  constructor() { }

  public open(component: Type<any>) {
    const config: any = {
      component,
      isOpen: true
    }
    console.log('OVERLAY PANEL OPENING', config);
    this.panelSubject$.next(config);
  }

  public close() {
    const closingConfig: any = {
      component: null,
      isOpen: false
    }
    this.panelSubject$.next(closingConfig);
  }
}
