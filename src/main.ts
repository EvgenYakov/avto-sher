import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';

import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApplyTokenInterceptor, AuthGuard, RefreshTokenInterceptor } from '@services';
import {
  appReducers,
  AuthEffects,
  AutoparkEffects,
  AutoparksEffects,
  CarDetailedEffects,
  CarListEffects,
  UserEffects,
} from '@store';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { RegionEffects } from './store/region/region.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      appRoutes,
      // withDebugTracing(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    importProvidersFrom(
      BrowserModule,
      StoreModule.forRoot(appReducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
      EffectsModule.forRoot([
        AuthEffects,
        CarListEffects,
        CarDetailedEffects,
        AutoparkEffects,
        AutoparksEffects,
        UserEffects,
        RegionEffects,
      ])
    ),
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplyTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true,
    },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch(err => console.error(err));
