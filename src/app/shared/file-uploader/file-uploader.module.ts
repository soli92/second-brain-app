import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../buttons/button/component/button.component';
import { FileUploaderComponent } from './component/file-uploader.component';
import { MaterialModule } from '../material/material.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    //ButtonComponent,
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FileUploaderComponent
  ]
})
export class FileUploaderModule { }
