import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from './component/generic-form.component';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormContentComponent } from './components/generic-form-content/generic-form-content.component';
import { FileUploaderModule } from '../file-uploader/file-uploader.module';
import { GenericFormActionsComponent } from './components/generic-form-actions/generic-form-actions.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    GenericFormContentComponent,
    GenericFormComponent,
    GenericFormActionsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    //SharedModule,
    FileUploaderModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    GenericFormComponent
  ]
})
export class GenericFormModule { }
