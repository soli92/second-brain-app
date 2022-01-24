import { AfterContentInit, Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { OverlayPanelService } from 'src/app/shared/services/overlay-panel.service';

@Directive({
  selector: '[m2bOverlayPanel]'
})
export class OverlayPanelDirective implements AfterContentInit, OnDestroy{

  constructor(
    private elementRef: ElementRef,
    private overlayPanelService: OverlayPanelService
  ) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedOutside = this.elementRef.nativeElement == targetElement;
    if (clickedOutside) this.overlayPanelService.close();
  }

  observer: any = null;

  ngAfterContentInit() {
    const node = this.elementRef.nativeElement;
    this.observer = new MutationObserver(
      (mutations) => {
        mutations.forEach( (change: MutationRecord) => {
          if( (change.target as Element)['classList'].contains('open')) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
          }
          else {
            document.getElementsByTagName('body')[0].style.overflow = '';
          }
        });
      }
    )

    this.observer.observe(node, {
      attributes: true
    })
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
