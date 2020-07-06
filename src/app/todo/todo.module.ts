import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { Routes, RouterModule } from '@angular/router';
import {  FormsModule } from '@angular/forms';
// import { TodoServicesService } from '../services/todo-services.service';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
]
@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    // TodoServicesService,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TodoModule { }
