import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './buttons/button/component/button.component';
import { SideMenuModule } from './side-menu/side-menu.module';

export const sharedComponents = [
  ButtonComponent
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
