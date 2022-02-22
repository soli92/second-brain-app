import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'm2b-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {
  @Input() pageTitle: string;
  
  @Output() fabButtonClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public onButtonClickedEvent(event) {
    this.fabButtonClicked.emit(event);
  }

}
