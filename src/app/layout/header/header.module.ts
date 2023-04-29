import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';

import { HeaderComponent } from './header.component';
import { CustomNavbarComponent } from './components/custom-navbar/custom-navbar.component';

@NgModule({
  declarations: [HeaderComponent, CustomNavbarComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterLink,
    ToolbarModule,
  ],
})
export class HeaderModule {}
