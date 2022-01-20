import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
