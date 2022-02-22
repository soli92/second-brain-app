import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './buttons/button/component/button.component';
import { SideMenuModule } from './side-menu/side-menu.module';

import { FileUploaderComponent } from './file-uploader/component/file-uploader.component';
import { EntertainmentPageComponent } from './entertainment-page/component/entertainment-page.component';


export const sharedComponents = [
  ButtonComponent,
  EntertainmentPageComponent,
  FileUploaderComponent
]


@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SideMenuModule
  ],
  exports: [
    ...sharedComponents,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SideMenuModule
  ]
})
export class SharedModule { }
