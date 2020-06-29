import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReactivComponent } from './reactiv/reactiv.component'

const routes: Routes = [{
  path: "",
  component: PracticeComponent
},
{
  path: "reactive",
  component: ReactivComponent
},
{
  path: "template",
  component: TemplateFormComponent
}]

@NgModule({
  declarations: [TemplateFormComponent, PracticeComponent, ReactivComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ]
})
export class PracticeModule { }
