import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivComponent } from './reactiv/reactiv.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{
  path: '',
  component: PracticeComponent
},
{
  path: 'reactive',
  component: ReactivComponent
}, {
  path: 'store',
  component: LoginPageComponent
},
{
  path: 'template',
  component: TemplateFormComponent
}]

@NgModule({
  declarations: [TemplateFormComponent,
    PracticeComponent,
    ReactivComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,

  ]
})
export class PracticeModule { }
