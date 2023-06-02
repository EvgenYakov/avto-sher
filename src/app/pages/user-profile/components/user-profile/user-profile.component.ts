import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserProfile, UserProfileInfoForm } from '@models';

import { CardButton, CardLink } from '../../interfaces';
import { CARD_BUTTONS, CARD_LINKS, USER_PROFILE_INFO } from '../../constants';
import { USER_PROFILE_DEPS } from './user-profile.dependencies';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [USER_PROFILE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
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
    return new FormGroup( {
      description: new FormControl( this.userProfileInfo.description ),
    } );
  }
}
