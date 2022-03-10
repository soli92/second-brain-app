import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NerdyApiGwResources } from 'src/app/core/api-gw/models/api-gw.models';
import { GenericFormMode } from '../enums/generic-form-mode.enum';
import { IGenericFormActionButtonEvent } from '../models/generic-form-action-button.models';
import { GenericFormConfigModel } from '../models/generic-form-config.model';
import { GenericFormControlBuilder } from '../models/generic-form-control.models';
import { GenericFormDataModel } from '../models/generic-form-data.models';

@Component({
  selector: 'm2b-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  public genericformGroup: FormGroup = new FormGroup({});
  @Input() public title: string;
  @Input() public mode: GenericFormMode;
  @Input() public scope: NerdyApiGwResources;
  @Input() public formConfig: GenericFormConfigModel;

  @Output() public onActionButtonEmitter = new EventEmitter<IGenericFormActionButtonEvent>();

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public genericFormData: GenericFormDataModel,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<GenericFormComponent>
  ) { }

  ngOnInit(): void {
    this._checkMode();
    //this.mode = GenericFormMode.INSERT;
    this._initGenericFormControlGroup();
  }

  public updateFormGroup(event) {
    console.log('UPDATE FORM ON FATHER', event);
  }

  public onActionButtonClicked(event) {
    console.log('Action button clicked: ', event);
    if (event == 'clear') {
      this.genericformGroup.reset();
      this.genericformGroup.updateValueAndValidity();
    }

    if (event == 'submit') {
      switch (this.mode) {

        case GenericFormMode.DELETE:
          this.onActionButtonEmitter.emit({
            buttonClicked: GenericFormMode.DELETE,
            data: null
          })
          break;

        case GenericFormMode.EDIT:
          this.onActionButtonEmitter.emit({
            buttonClicked: GenericFormMode.EDIT,
            data: this.genericformGroup.getRawValue()
          })
          break;

        case GenericFormMode.INSERT:
          this.onActionButtonEmitter.emit({
            buttonClicked: GenericFormMode.INSERT,
            data: this.genericformGroup.getRawValue()
          })
          this.dialogRef.close({
            buttonClicked: GenericFormMode.INSERT,
            data: this.genericformGroup.getRawValue()
          });
          break;

        default:
          console.log("MODE TYPE DOESN/'T MATCH");
          break;
      }
    }

  }

  private _checkMode() {  
    this.mode = this.genericFormData.mode;
  }

  private _initForm() { }

  private _initGenericFormControlGroup() {
    this.formConfig = this.genericFormData.formConfig;
    this.title = this.genericFormData.title;
    this.genericformGroup = new GenericFormControlBuilder(this.formBuilder, this.formConfig).buildFormGroup();
  }

}
