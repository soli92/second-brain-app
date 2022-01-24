import { Type } from "@angular/core";

export interface SidemenuConfigModel {
    items: SidemenuItemModel[];
    direction?: string;
    headerComponentSelector?: string;
    headerMenuContent?: Type<any>;
    titlei18n?: string;
}

export interface SidemenuItemModel {
    nameI18n: string;
    isActive: boolean;
    subItems?: SidemenuSubItemModel[];
    matIcon?: string;
    onClickFn?: SidemenuItemOnClickFnModel;
    selected?: boolean;
}

export interface SidemenuSubItemModel {
    matIcon?: string;
    nameI18n: string;
    path: string;
    queryParams?: any;
}

export interface SidemenuItemOnClickFnModel {
    name: string;
    args?: any;
}