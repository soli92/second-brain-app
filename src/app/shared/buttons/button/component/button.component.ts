import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyle, ButtonType } from '../enum/button.enums';
import { ButtonIconModel } from '../models/button.models';

@Component({
  selector: 'm2b-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: ButtonType | string;
  @Input() buttonStyle: ButtonStyle | string;
  @Input() buttonLabel?: string;
  @Input() buttonMatIcon?: string | ButtonIconModel;

  @Input() disabled: boolean;

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('BUTTON TYPE', this.buttonType);
  }

  public buttonClick(event?) {
    this.onButtonClicked.emit(event);
  }

}
