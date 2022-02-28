import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms"
import { GenericFormComponents } from "../enums/generic-form-components.type";

import { GenericFormControlType } from "../enums/generic-form-control-type.enum";
import { GenericFormConfigModel } from "./generic-form-config.model";

export class GenericFormControlModel {
    controlName: string;
    componentType: GenericFormComponents;
    controlLabel: string;
    value: any;
    validators?: ValidatorFn[];
    disableCondition?: any | (() => boolean);
}

export class GenericFormControlGroupModel {
    controls: {
        [key: string]: GenericFormControlModel | GenericFormControlGroupModel | (GenericFormControlModel | GenericFormControlGroupModel)[]
    };
    validators?: ValidatorFn[];
    disableCondition?: any | (() => boolean);
}

export class GenericFormControlBuilder {
    public genericFormGroup = new FormGroup({});
    constructor(
        private fb: FormBuilder,
        private formConfig: GenericFormConfigModel
    ) {}

    public buildFormGroup(): FormGroup {
        this.formConfig
            .controls
            .forEach(
                genericControl => {
                    let control;
                    switch (genericControl.controlType) {
                        case GenericFormControlType.ARRAY:
                            control = this.getFormArray((genericControl.config as (GenericFormControlModel | GenericFormControlGroupModel)[]));
                            this.genericFormGroup.addControl(genericControl.controlName, control);
                            break;

                        case GenericFormControlType.CONTROL:
                            control = this.getFormControl((genericControl.config as GenericFormControlModel));
                            this.genericFormGroup.addControl(genericControl.controlName, control);
                            break;

                        case GenericFormControlType.GROUP:
                            control = this.getFormControlGroup((genericControl.config as GenericFormControlGroupModel));
                            this.genericFormGroup.addControl(genericControl.controlName, control);
                            break;
                    }

                }
            )
        console.log('FORM GROUP BUILDER | buildFormGroup()', this.genericFormGroup);
        return this.genericFormGroup;
    }

    private getFormControl(config: GenericFormControlModel) {
        const validators = config.validators && config.validators.length > 0 ? [...config.validators] : [];
        return this.fb.control(
            {
                value: config.value,
                disabled: config.disableCondition
            }, validators);
    }

    private getFormArray(configs: (GenericFormControlModel | GenericFormControlGroupModel)[]) {
        const controlsArray = configs.map(
            control => {
                if (control instanceof GenericFormControlModel) {
                    return this.getFormControl(control)
                }
                if (control instanceof GenericFormControlGroupModel) {
                    return this.getFormControlGroup(control);
                }
            }
        )
        return this.fb.array(controlsArray);
    }

    private getFormControlGroup(config: GenericFormControlGroupModel) {
        const formGroupArray = Object.keys(config.controls).map(
            key => {
                if (config.controls[key] instanceof GenericFormControlModel) {
                    let item = { key: this.getFormControl((config.controls[key] as GenericFormControlModel)) }
                    return item;
                }

                if (config.controls[key] instanceof GenericFormControlGroupModel) {
                    let item = { key: this.getFormControlGroup(config.controls[key] as GenericFormControlGroupModel) }
                    return item;
                }

                if (config.controls[key] instanceof Array) {
                    let item = { key: this.getFormArray(config.controls[key] as (GenericFormControlModel | GenericFormControlGroupModel)[]) };
                    return item;
                }
            }
        )
        return this.fb.group({ ...formGroupArray });
    }
}