import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayPanelConfigModel } from 'src/app/layout/overlay-panel/models/overlay-panel.models';


@Injectable({
  providedIn: 'root'
})
export class OverlayPanelService {
  public panelSubject$ = new BehaviorSubject<any>(null);

  constructor() { }

  public open(component: Type<any>) {
    const config: OverlayPanelConfigModel = {
      component,
      isOpen: true
    }

    this.panelSubject$.next(config);
  }

  public close() {
    const closingConfig: OverlayPanelConfigModel = {
      component: null,
      isOpen: false
    }
    this.panelSubject$.next(closingConfig);
  }
}
