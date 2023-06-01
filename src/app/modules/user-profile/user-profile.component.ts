import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfile, UserProfileInfoForm } from '@models';
import { CardLink } from './interfaces/card-link.interface';
import { CardButton } from './interfaces/card-button.interface';
import { USER_PROFILE_INFO } from './constants/user-profile-info.constants';
import { CARD_LINKS } from './constants/card-links.constants';
import { CARD_BUTTONS } from './constants/card-buttons.constants';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CardModule, UserAvatarComponent, NgIf, FormsModule, ReactiveFormsModule, InputTextareaModule, NgFor, CardLinkComponent, NgClass, CardButtonComponent]
})
export class UserProfileComponent implements OnInit {
  @Input() public userProfileInfo: UserProfile = USER_PROFILE_INFO;

  public readonly cardLinks: CardLink[] = CARD_LINKS;
  public readonly cardButtons: CardButton[] = CARD_BUTTONS;
  public isEditMode: boolean = false;
  public userProfileInfoForm: FormGroup<UserProfileInfoForm>;

  ngOnInit() {
    this.userProfileInfoForm = this.initializeForm();
  }

  public saveDescriptionInfo(): void {
    this.userProfileInfo.description =
      this.userProfileInfoForm.controls.description.value || '';
    this.isEditMode = false;
  }

  private initializeForm(): FormGroup<UserProfileInfoForm> {
    return new FormGroup({
      description: new FormControl(this.userProfileInfo.description),
    });
  }
}
