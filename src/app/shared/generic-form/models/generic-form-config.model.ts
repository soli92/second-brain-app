import { GenericFormControlType } from "../enums/generic-form-control-type.enum";
import { GenericFormControlGroupModel, GenericFormControlModel } from "./generic-form-control.models";

export interface GenericFormControlConfigModel {
    controlName: string;
    type: GenericFormControlType,
    config: GenericFormControlModel | GenericFormControlGroupModel | (GenericFormControlModel | GenericFormControlGroupModel)[]
}
export interface GenericFormConfigModel {
    controls: GenericFormControlConfigModel[]
}