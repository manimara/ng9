import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'heros',
    loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule),
    data: {
      animations: 'heros'
    }
  }, {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'hero',
    loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule),
    data: {
      animations: 'hero'
    }
  },
  {
    path: 'practice',
    loadChildren: () => import('./practice/practice.module').then(m => m.PracticeModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
  },
  { path: '**', component: MainComponent },
  {
    path: '',
    redirectTo: '/tw',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // useHash: false,
      // enableTracing: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
