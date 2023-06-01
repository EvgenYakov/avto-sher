import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';


@NgModule({
    imports: [
    CommonModule,
    UserProfileRoutingModule,
    CardModule,
    InputTextareaModule,
    ReactiveFormsModule,
    UserProfileComponent,
    CardButtonComponent,
    CardLinkComponent,
    UserAvatarComponent
]
})
export class UserProfileModule {
}
