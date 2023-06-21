import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withRouterConfig } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  appReducers,
  AuthEffects,
  AutoparkDetailedEffects,
  AutoparksEffects,
  CarDetailedEffects,
  CarListEffects
} from '@store';
import { environment } from '@environments/environment';
import { ApplyTokenInterceptor, AuthGuard } from '@services';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes'
import { UserEffects } from './store/user';

bootstrapApplication( AppComponent, {
  providers: [
    provideRouter(
      appRoutes,
      // withDebugTracing(),
      withRouterConfig( { paramsInheritanceStrategy: 'always' } )
    ),
    importProvidersFrom( BrowserModule, StoreModule.forRoot( appReducers ), StoreDevtoolsModule.instrument( {
      maxAge: 25,
      logOnly: environment.production,
    } ), EffectsModule.forRoot( [
      AuthEffects,
      CarListEffects,
      CarDetailedEffects,
      AutoparkDetailedEffects,
      AutoparksEffects,
      UserEffects
    ] ) ),
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplyTokenInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RefreshTokenInterceptor,
    //   multi: true,
    // },
    provideAnimations(),
    provideHttpClient( withInterceptorsFromDi() )
  ]
} )
.catch( err => console.error( err ) );
