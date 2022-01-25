import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './component/jokes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    JokesComponent
  ]
})
export class JokesModule { }
