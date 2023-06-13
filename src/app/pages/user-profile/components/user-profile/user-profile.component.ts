import { ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MenuItem } from 'primeng/api';

import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';

import { UserProfile, UserProfileInfoForm } from '@models';
import { AppRoutes, MainRoutes } from '@constants';
import { addBreadcrumb } from '@store';

import { CardButton, CardLink } from '../../interfaces';
import { CARD_BUTTONS, CARD_LINKS, USER_PROFILE_INFO } from '../../constants';
import { USER_PROFILE_DEPS } from './user-profile.dependencies';
import { BreadcrumbService } from '../../../../services/helpers/breadcrumb.service';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [USER_PROFILE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() public userProfileInfo: UserProfile = USER_PROFILE_INFO;

  public readonly cardLinks: CardLink[] = CARD_LINKS;
  public readonly cardButtons: CardButton[] = CARD_BUTTONS;

  public isEditMode: boolean = false;
  public userProfileInfoForm: FormGroup<UserProfileInfoForm>;

  private store = inject( Store );
  private breadcrumbService = inject( BreadcrumbService );

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.userProfileInfoForm = this.initializeForm();
    this.setBreadcrumbs();
  }

  public saveDescriptionInfo(): void {
    this.userProfileInfo.description = this.userProfileInfoForm.controls.description.value || '';
    this.isEditMode = false;
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Профиль',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.USER_PROFILE }`
    };
    this.breadcrumbService.addBreadcrumb(breadcrumb);
  }

  private initializeForm(): FormGroup<UserProfileInfoForm> {
    return new FormGroup( {
      description: new FormControl( this.userProfileInfo.description ),
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
