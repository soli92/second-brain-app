import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './buttons/button/component/button.component';
import { SideMenuModule } from './side-menu/side-menu.module';

import { FileUploaderComponent } from './file-uploader/component/file-uploader.component';
import { EntertainmentPageComponent } from './entertainment-page/component/entertainment-page.component';
import { GenericFormModule } from './generic-form/generic-form.module';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { ButtonsModule } from './buttons/buttons.module';
import { GenericTableListModule } from './generic-table-list/generic-table-list.module';



export const sharedComponents = [
  //ButtonComponent,
  EntertainmentPageComponent,
  //FileUploaderComponent
]


@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  imports: [
    ButtonsModule,
    CommonModule,
    FileUploaderModule,
    FormsModule,
    GenericFormModule,
    GenericTableListModule,
    MaterialModule,
    ReactiveFormsModule,
    SideMenuModule
  ],
  exports: [
    ...sharedComponents,
    ButtonsModule,
    FileUploaderModule,
    FormsModule,
    GenericFormModule,
    GenericTableListModule,
    MaterialModule,
    ReactiveFormsModule,
    SideMenuModule
  ]
})
export class SharedModule { }
