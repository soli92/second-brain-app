import { FormBuilder, FormGroup, ValidatorFn } from "@angular/forms"
import { GenericFormControlType } from "../enums/generic-form-control-type.enum";
import { GenericFormConfigModel } from "./generic-form-config.model";

export class GenericFormControlModel {
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
                    switch (genericControl.type) {
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
        return this.genericFormGroup;
    }

    private getFormControl(config: GenericFormControlModel) {
        return this.fb.control(
            {
                value: config.value,
                disabled: config.disableCondition
            }, [...config.validators]);
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