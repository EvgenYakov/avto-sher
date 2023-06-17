import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { AppRoutes, MainRoutes } from '@constants';
import { BreadcrumbService } from '@services';
import { changeProfileDescription, getMe, selectUserProfile, UserState } from '@store';
import { UserProfile } from '@models';

import { CardButton, CardLink, UserProfileInfoForm } from '../../interfaces';
import { CARD_BUTTONS, CARD_LINKS } from '../../constants';
import { USER_PROFILE_DEPS } from './user-profile.dependencies';
import { ButtonModule } from 'primeng/button';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [USER_PROFILE_DEPS, AsyncPipe, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class UserProfileComponent implements OnInit, OnDestroy {

  public userProfile$ = this.store.select( selectUserProfile );

  protected readonly cardLinks: CardLink[] = CARD_LINKS;
  protected readonly cardButtons: CardButton[] = CARD_BUTTONS;

  protected isEditMode: boolean = false;
  protected userProfileInfoForm: FormGroup<UserProfileInfoForm>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<UserState>,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.setBreadcrumbs();
    this.getDataFromStore();
  }

  public saveDescriptionInfo(): void {
    const description = this.userProfileInfoForm.controls.description.value;
    if(description) {
      this.store.dispatch( changeProfileDescription( { info: description } ) )
    }
    this.isEditMode = false;
  }

  private getDataFromStore(): void {
    this.userProfile$.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (userProfile) => {
      this.userProfileInfoForm = this.initializeForm( userProfile )
    } )
  }

  private setBreadcrumbs(): void {
    const breadcrumb: MenuItem = {
      label: 'Профиль',
      routerLink: `${ AppRoutes.MAIN }/${ MainRoutes.USER_PROFILE }`
    };
    this.breadcrumbService.addBreadcrumb( breadcrumb );
  }

  private initializeForm(userProfile: UserProfile): FormGroup<UserProfileInfoForm> {
    return new FormGroup( {
      description: new FormControl( userProfile.info ),
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
