import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanillaCssComponent } from './vanilla-css.component';



@NgModule({
  declarations: [
    VanillaCssComponent
  ],
  exports: [
    VanillaCssComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VanillaCssModule { }
