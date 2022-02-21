import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'm2b-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Output()
  public onUploadButtonClicked = new EventEmitter<any>();

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  public files  = [];

  private formData = new FormData();

  constructor() { }

  ngOnInit(): void {
  }

  emitUploadEvent(event) {
    console.log('FILE', event);
    
    this.formData.append('file', event);
    this.onUploadButtonClicked.emit(this.formData);
  }

}
