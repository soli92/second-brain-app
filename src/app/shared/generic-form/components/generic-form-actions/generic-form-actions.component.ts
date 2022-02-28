import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericFormMode } from '../../enums/generic-form-mode.enum';

@Component({
  selector: 'm2b-generic-form-actions',
  templateUrl: './generic-form-actions.component.html',
  styleUrls: ['./generic-form-actions.component.scss']
})
export class GenericFormActionsComponent implements OnInit {
  @Input() public mode: GenericFormMode;
  @Input() public disableCondition: boolean;
  @Output() private buttonClickedEmitter = new EventEmitter<any>();
  public submitButtonLabel: string;

  constructor() { }

  ngOnInit(): void {
    this.submitButtonLabel = this.mode === GenericFormMode.DELETE ? 'Delete' :
                             this.mode === GenericFormMode.EDIT ? 'Update' :
                             'Submit'
  }

  public onActionButtonClicked(buttonClicked: string, event) {
    this.buttonClickedEmitter.emit(buttonClicked);
  }

}
