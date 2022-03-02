import { NerdyApiGwResources } from "src/app/core/api-gw/models/api-gw.models";
import { BookItemModel } from "src/app/features/books/models/book-item.model";
import { GenericFormMode } from "../enums/generic-form-mode.enum";
import { GenericFormConfigModel } from "./generic-form-config.model";

export interface GenericFormDataModel {
    scope: NerdyApiGwResources,
    mode: GenericFormMode,
    formConfig: GenericFormConfigModel,
    title?: string,
    item?: BookItemModel
}