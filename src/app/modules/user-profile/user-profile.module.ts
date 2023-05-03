import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardLinkComponent } from './components/card-link/card-link.component';

@NgModule({
  declarations: [UserProfileComponent, CardButtonComponent, CardLinkComponent],
  imports: [CommonModule, UserProfileRoutingModule, CardModule],
})
export class UserProfileModule {}
