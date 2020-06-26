import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
// import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

const routes : Routes = [
  {
    path:"",
    component: HerosComponent
  },
  {
    path:":id",
    component: HeroComponent
  },
];

@NgModule({
  declarations: [HerosComponent, HeroComponent, /* C1Component , */C2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HerosModule { }
