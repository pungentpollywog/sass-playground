import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SassyCssComponent } from './sassy-css.component';



@NgModule({
  declarations: [
    SassyCssComponent
  ],
  exports: [
    SassyCssComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SassyTextSuperModule { }
