import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksComponent } from './component/books.component';



@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    BooksRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BooksModule { }
