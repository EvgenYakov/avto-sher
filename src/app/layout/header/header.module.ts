import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterLink,
    BrowserAnimationsModule,
    ToolbarModule
  ]
})
export class HeaderModule { }
