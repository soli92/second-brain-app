import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NerdyApiGwResources } from 'src/app/core/api-gw/models/api-gw.models';
import { GenericFormMode } from '../enums/generic-form-mode.enum';
import { GenericFormDataModel } from '../models/generic-form-data.models';

@Component({
  selector: 'm2b-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  public genericformGroup: FormGroup;
  public title: string;
  public mode: GenericFormMode;
  public scope: NerdyApiGwResources;
  
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public genericFormData: GenericFormDataModel,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  private _checkMode() {
    this.mode = this.genericFormData.mode;
  }

  private _initForm() {}

  private _initFormGroupControls() {
    this.genericformGroup = this.formBuilder.group({

    })
  }

}
