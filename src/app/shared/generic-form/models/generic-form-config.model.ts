
import { GenericFormComponents } from "../enums/generic-form-components.type";
import { GenericFormControlType } from "../enums/generic-form-control-type.enum";
import { GenericFormControlGroupModel, GenericFormControlModel } from "./generic-form-control.models";

export interface GenericFormControlConfigModel {
    controlName: string;
    controlType: GenericFormControlType,
    componentType: GenericFormComponents,
    config: GenericFormControlModel | GenericFormControlGroupModel | (GenericFormControlModel | GenericFormControlGroupModel)[]
}
export interface GenericFormConfigModel {
    controls: GenericFormControlConfigModel[];
}