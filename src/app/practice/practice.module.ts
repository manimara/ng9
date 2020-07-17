import { HttpClientModule } from '@angular/common/http';
import { GenericService } from './../services/generic.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PracticeComponent } from './practice.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivComponent } from './reactiv/reactiv.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import * as ScoreBoard from './scoreboard/scoreboard.reducer';
import * as MoviePage from './movies-page/movies.reducer';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies-page/movies.effects';


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
  path: 'scoreboard',
  component: ScoreboardComponent
},
{
  path: 'template',
  component: TemplateFormComponent
},
{
  path: 'movies',
  component: MoviesPageComponent
},
]

@NgModule({
  declarations: [TemplateFormComponent,
    PracticeComponent,
    ReactivComponent,
    LoginPageComponent,
    ScoreboardComponent,
    MoviesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    HttpClientModule,
    StoreModule.forFeature(
      ScoreBoard.scoreboardFeatureKey,
      ScoreBoard.scoreBoardReducer
    ),
    StoreModule.forFeature(
      MoviePage.MoviesPageFeature,
      MoviePage.moviesReducer
    ),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [
    GenericService,
  ]
})
export class PracticeModule { }
