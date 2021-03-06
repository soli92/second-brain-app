import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './component/jokes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JokesRoutingModule } from './jokes-routing.module';



@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule
  ],
  exports: [
    JokesComponent
  ]
})
export class JokesModule { }
