import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DollsComponent } from './dolls.component';



@NgModule({
  declarations: [
    DollsComponent
  ],
  exports: [
    DollsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DollsModule { }
