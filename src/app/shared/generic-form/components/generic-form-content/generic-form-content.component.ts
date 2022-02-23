import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { NerdyApiGwResources } from 'src/app/core/api-gw/models/api-gw.models';
import { GenericFormControlType } from '../../enums/generic-form-control-type.enum';
import { GenericFormConfigModel } from '../../models/generic-form-config.model';
import { GenericFormControlBuilder, GenericFormControlGroupModel, GenericFormControlModel } from '../../models/generic-form-control.models';

@Component({
  selector: 'm2b-generic-form-content',
  templateUrl: './generic-form-content.component.html',
  styleUrls: ['./generic-form-content.component.scss']
})
export class GenericFormContentComponent implements OnInit {
  genericFormControlGroup: FormGroup;

  controlTypeMap = {
    'array': GenericFormControlType.ARRAY,
    'control': GenericFormControlType.CONTROL,
    'group': GenericFormControlType.GROUP
  };
  
  @Input() genericFormScope: NerdyApiGwResources;
  @Input() genericFormConfig: GenericFormConfigModel;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.genericFormControlGroup = new GenericFormControlBuilder(this.fb, this.genericFormConfig).buildFormGroup();
  }


  private initForm() {
  }

}
