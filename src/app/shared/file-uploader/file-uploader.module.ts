import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../buttons/button/component/button.component';
import { FileUploaderComponent } from './component/file-uploader.component';



@NgModule({
  declarations: [
    //ButtonComponent,
    //FileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //FileUploaderComponent
  ]
})
export class FileUploaderModule { }
