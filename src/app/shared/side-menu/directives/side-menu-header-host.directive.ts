import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[m2bSideMenuHeaderHost]'
})
export class SideMenuHeaderHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
