import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'm2b-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Output()
  public onUploadButtonClicked = new EventEmitter<any>();

  @Output()
  public onFileSelectedEmitter = new EventEmitter<any>();

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

  onFileSelected(event) {
  
    const file: File = event.target.files[0];
    if (file) {
      const filename = file.name;

      const formData = new FormData();
      formData.append('thumbnail', file);
      console.log('ON FILE SELECTED', formData);
      this.onFileSelectedEmitter.emit(file);
    }
    
  }

}
