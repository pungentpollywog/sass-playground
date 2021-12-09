import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DollsComponent } from './dolls/dolls.component';
import { MaskingComponent } from './masking/masking.component';
import { SassyCssComponent } from './sassy-css/sassy-css.component';
import { VanillaCssComponent } from './vanilla-css/vanilla-css.component';

const routes: Routes = [
  { path: 'vanilla-css', component: VanillaCssComponent },
  { path: 'sassy-css', component: SassyCssComponent },
  { path: 'masking', component: MaskingComponent },
  { path: 'dolls', component: DollsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
