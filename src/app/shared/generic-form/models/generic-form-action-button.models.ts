import { GenericFormMode } from "../enums/generic-form-mode.enum";

export interface IGenericFormActionButtonEvent {
    buttonClicked: GenericFormMode,
    data: any
}