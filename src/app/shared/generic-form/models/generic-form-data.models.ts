import { NerdyApiGwResources } from "src/app/core/api-gw/models/api-gw.models";
import { BookItemModel } from "src/app/features/books/models/book-item.model";
import { GenericFormMode } from "../enums/generic-form-mode.enum";

export interface GenericFormDataModel {
    scope: NerdyApiGwResources,
    mode: GenericFormMode,
    item?: BookItemModel
}