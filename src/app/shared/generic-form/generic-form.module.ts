import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent } from './component/generic-form.component';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormContentComponent } from './components/generic-form-content/generic-form-content.component';



@NgModule({
  declarations: [
    GenericFormContentComponent,
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    //SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    GenericFormComponent
  ]
})
export class GenericFormModule { }
