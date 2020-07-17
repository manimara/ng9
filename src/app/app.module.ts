import { GenericService } from './services/generic.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PracticeModule } from './practice/practice.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LocalStorageService } from './local-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './services/token-interceptor.service';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter/counter.reducer';
import { LoginReducer } from './practice/login-page.reducer';
import { scoreBoardReducer } from './practice/scoreboard/scoreboard.reducer';
import { Action } from 'rxjs/internal/scheduler/Action';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule,
    PracticeModule,
    HttpClientModule,
    StoreModule.forRoot({
      count : counterReducer,
      login: LoginReducer,
      game : scoreBoardReducer
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    LocalStorageService,
    AuthService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    GenericService,
    // {
    //   provide: USER_PROVIDED_EFFECTS,
    //   useClass: MoviesEffects,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
