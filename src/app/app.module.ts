import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCardModule } from '@components';
import { AutoparkCardModule } from './components/autopark-card/autopark-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AutoCardModule, AutoparkCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
