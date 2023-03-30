import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReviewAutoparkCardModule } from '@components';
import { ReviewAutoCardModule } from './components/review-auto-card/review-auto-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReviewAutoparkCardModule,
    ReviewAutoCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
