import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidemenuItemModel } from '../../models/side-menu.models';

@Component({
  selector: 'm2b-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {
  @Input() item: SidemenuItemModel;
  @Input() direction: string;

  @Output() itemClicked = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  public toggleItem() {
    this.item.isActive = !this.item.isActive;
  }

  public executeItemClickFn() {
    this.itemClicked.emit(this.item.onClickFn);
  }

}
