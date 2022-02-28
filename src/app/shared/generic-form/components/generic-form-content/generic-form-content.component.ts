import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { NerdyApiGwResources } from 'src/app/core/api-gw/models/api-gw.models';
import { GenericFormComponents } from '../../enums/generic-form-components.type';
import { GenericFormControlType } from '../../enums/generic-form-control-type.enum';
import { GenericFormConfigModel, GenericFormControlConfigModel } from '../../models/generic-form-config.model';
import { GenericFormControlBuilder, GenericFormControlGroupModel, GenericFormControlModel } from '../../models/generic-form-control.models';

@Component({
  selector: 'm2b-generic-form-content',
  templateUrl: './generic-form-content.component.html',
  styleUrls: ['./generic-form-content.component.scss']
})
export class GenericFormContentComponent implements OnInit {
  @Input() genericFormControlGroup: FormGroup;

  controlTypeMap = {
    'array': GenericFormControlType.ARRAY,
    'control': GenericFormControlType.CONTROL,
    'group': GenericFormControlType.GROUP
  };

  componentType: GenericFormComponents;
  
  @Input() genericFormScope: NerdyApiGwResources;
  @Input() genericFormConfig: GenericFormConfigModel;

  @Output() inputFileEventEmitter = new EventEmitter<any>();
  @Output() genericFormControlGroupChange = new EventEmitter<any>();


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('GENERIC FORM CONTENT COMPONENT | ngOnInit | genericFormConfig', this.genericFormConfig);
    
    console.log('GENERIC FORM CONTENT COMPONENT | ngOnInit | genericFormControlGroup', this.genericFormControlGroup);
  }

  public getFormControlArray(controlName: string): FormArray {
    return (this.genericFormControlGroup.get(controlName) as FormArray)
  }

  public getArrayOfControls(controlName: string): AbstractControl[] {
    return (this.genericFormControlGroup.get(controlName) as FormArray).controls
  }

  public getConfigForArray(config: GenericFormControlConfigModel): (GenericFormControlModel | GenericFormControlGroupModel)[] {
    return (config.config as (GenericFormControlModel | GenericFormControlGroupModel)[])
  }

  public getControlOfFormArray(formArrayName: string, indexElem: number): AbstractControl {
    return this.getFormControlArray(formArrayName).at(indexElem);
  }

  public checkControlType(config: GenericFormControlModel | GenericFormControlGroupModel): GenericFormControlType | null {
    if (config instanceof GenericFormControlModel) return GenericFormControlType.CONTROL;
    if (config instanceof GenericFormControlGroupModel) return GenericFormControlType.GROUP;

    return null;
  }

  public getFormControl(config: GenericFormControlModel): FormControl {
    return (this.genericFormControlGroup.get(config.controlName) as FormControl);
  }

  public onInputFileSelected(event) {
    if (event) this.inputFileEventEmitter.emit(event);
  }

  public checkFormError(path: string, errorCode: string) {
    return this.genericFormControlGroup.get(path).invalid && 
           this.genericFormControlGroup.get(path).errors &&
           (this.genericFormControlGroup.get(path).dirty || this.genericFormControlGroup.get(path).touched) &&
           this.genericFormControlGroup.get(path).hasError(errorCode);
  }

  public onGenericFormControlGroupChange(event) {
    console.log('FORM GROUP CHANGE | generic form content', event);

    this.genericFormControlGroupChange.emit(this.genericFormControlGroup);
  }

  private initForm() {
  }

}
