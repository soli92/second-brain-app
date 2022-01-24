import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { OverlayPanelService } from 'src/app/shared/services/overlay-panel.service';
import { OverlayPanelConfigModel } from '../models/overlay-panel.models';


@Component({
  selector: 'm2b-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss']
})
export class OverlayPanelComponent implements OnInit {
  public open: boolean = false;
  public componentRef: ComponentRef<any> | null = null;

  @ViewChild('container', {read: ViewContainerRef})
  public container: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private overlayPanelService: OverlayPanelService
  ) { }

  ngOnInit(): void {
    this.overlayPanelService.panelSubject$.subscribe(
      (config: OverlayPanelConfigModel) => {
        if (config && config.component) {
          const factory = this.componentFactoryResolver.resolveComponentFactory(config.component);
          this.componentRef = this.container.createComponent(factory);
          if (config.inputs) this.mapInput(config.inputs);
        }
        else if(config && config.component === null) {
          if(this.componentRef) this.componentRef.destroy();
        }
        this.open = config?.isOpen;
      }
    )
  }

  private mapInput(inputs: any) {
    Object.keys(inputs).forEach(
      key => {
        this.componentRef.instance[key] = inputs[key];
      }
    )
  }

}
