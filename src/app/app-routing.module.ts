import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreeWayComponent } from './three-way/three-way.component';
import { MainComponent } from './main/main.component';
import { HerosModule } from './heros/heros.module';


const routes: Routes = [
  { path: 'three-way', component: ThreeWayComponent },
  { path: 'tw', component: ThreeWayComponent },
  {
    path: 'heros',
    loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule),
    data :{
      animations : 'heros'
    }
  },
  {
    path: 'hero',
    loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule),
    data :{
      animations : 'hero'
    }
  },
  {
    path: 'practice',
    loadChildren: () => import('./practice/practice.module').then(m => m.PracticeModule),
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
    // { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
