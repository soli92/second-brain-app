import { Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'm2b-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Optional() @Input() withUpload: boolean;
    
  @Output()
  public onUploadButtonClicked = new EventEmitter<any>();

  @Output()
  public onFileSelectedEmitter = new EventEmitter<any>();

  @Input()
  public formControl: FormControl;

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
      formData.append('file', file, filename);
      console.log('ON FILE SELECTED', file);
      this.formControl.setValue({
        name: filename,
        data: formData
      });
      this.onFileSelectedEmitter.emit(formData);
    }
    
  }

}
