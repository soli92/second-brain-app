import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './buttons/button/component/button.component';
import { SideMenuModule } from './side-menu/side-menu.module';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { FileUploaderComponent } from './file-uploader/component/file-uploader.component';

export const sharedComponents = [
  ButtonComponent,
  FileUploaderComponent
]


@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    //FileUploaderModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SideMenuModule
  ],
  exports: [
    ...sharedComponents,
    //FileUploaderModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SideMenuModule
  ]
})
export class SharedModule { }
