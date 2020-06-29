import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
// import { NgForm } from '@angular/forms';

const routes: Routes = [{
  path: "",
  component: PracticeComponent
}]

@NgModule({
  declarations: [TemplateFormComponent, PracticeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    // NgForm,

  ]
})
export class PracticeModule { }
