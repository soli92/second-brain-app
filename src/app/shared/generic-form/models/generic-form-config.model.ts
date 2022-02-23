import { GenericFormControlType } from "../enums/generic-form-control-type.enum";
import { GenericFormControlGroupModel, GenericFormControlModel } from "./generic-form-control.models";

export interface GenericFormConfigModel {
    controls: [
        {
            controlName: string;
            type: GenericFormControlType,
            config: GenericFormControlModel | GenericFormControlGroupModel | (GenericFormControlModel | GenericFormControlGroupModel)[]
        }
    ]
}