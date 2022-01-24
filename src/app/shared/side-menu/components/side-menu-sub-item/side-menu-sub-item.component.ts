import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanelService } from 'src/app/shared/services/overlay-panel.service';
import { SidemenuSubItemModel } from '../../models/side-menu.models';

@Component({
  selector: 'm2b-side-menu-sub-item',
  templateUrl: './side-menu-sub-item.component.html',
  styleUrls: ['./side-menu-sub-item.component.scss']
})
export class SideMenuSubItemComponent implements OnInit {
  @Input() item: SidemenuSubItemModel;
  constructor(
    private router: Router,
    private overlayPanelservice: OverlayPanelService
  ) { }

  ngOnInit(): void {
  }

  public navigateTo() {
    // this.router.navigateByUrl(this.item.path)
    this.router.navigate(
      [this.item.path],
      {
        queryParams: this.item.queryParams ? this.item.queryParams : null
      }
    );
    this.overlayPanelservice.close();

  }

}
