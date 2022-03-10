import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableListComponent } from './component/generic-table-list.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    GenericTableListComponent,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GenericTableListComponent
  ]
})
export class GenericTableListModule { }
