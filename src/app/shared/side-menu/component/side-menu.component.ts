import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OverlayPanelService } from '../../services/overlay-panel.service';
import { SideMenuHeaderHostDirective } from '../directives/side-menu-header-host.directive';
import { SidemenuConfigModel } from '../models/side-menu.models';

@Component({
  selector: 'm2b-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit {

  @Input() config: SidemenuConfigModel;
  @Output() itemClick = new EventEmitter();
  
  public headerComponentRef: ComponentRef<any> = null;

  @ViewChild(SideMenuHeaderHostDirective, {static: false}) sidemenuHeaderHost!: SideMenuHeaderHostDirective;

  constructor(
    private overlayPanelService: OverlayPanelService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    console.log('CONFIG INPUT SIDE-MENU', this.config);
  }

  ngAfterViewInit() {
    if(this.config && this.config.headerMenuContent) this.renderHeaderComponent();
    else if (this.config && !this.config.headerMenuContent && this.headerComponentRef) this.headerComponentRef.destroy();
  }

  public close() {
    this.overlayPanelService.close();
  }

  public onItemClicked(evt) {
    this.itemClick.emit(evt);
    this.close();
  }

  private renderHeaderComponent() {
    const viewContainerRef = this.sidemenuHeaderHost.viewContainerRef;
    viewContainerRef.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.config.headerMenuContent);
    const componentRef = viewContainerRef.createComponent(factory);
  }

}
