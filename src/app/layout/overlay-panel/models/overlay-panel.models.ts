import { Type } from "@angular/core";

export class OverlayPanelConfigModel {
    component: Type<any> | null = null;
    inputs?: any; 
    isOpen: boolean = false;
}