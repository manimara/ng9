import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DateOptionPipe } from '../date-option.pipe'
// import { TodoServicesService } from '../services/todo-services.service';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
]
@NgModule({
  declarations: [TodoComponent,
    DateOptionPipe],
  imports: [
    CommonModule,
    // TodoServicesService,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TodoModule { }
