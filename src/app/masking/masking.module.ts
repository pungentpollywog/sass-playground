import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskingComponent } from './masking.component';



@NgModule({
  declarations: [
    MaskingComponent
  ],
  exports: [
    MaskingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaskingModule { }
