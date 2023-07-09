import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MenuItem } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { AppRoutes, LoadingTypes, MainRoutes } from '@constants';
import { BreadcrumbService } from '@services';
import {
  changeProfileAvatar,
  changeProfileDescription,
  deleteProfileAvatar,
  logout,
  selectLoading,
  selectUserProfile,
  UserState
} from '@store';
import { UserProfile } from '@models';

import { CardButton, CardLink, UserProfileInfoForm } from '../../interfaces';
import { CARD_BUTTONS, CARD_LINKS, FILE_ERRORS } from '../../constants';
import { USER_PROFILE_DEPS } from './user-profile.dependencies';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [USER_PROFILE_DEPS],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class UserProfileComponent implements OnInit, OnDestroy {

  public userProfile$ = this.store.select( selectUserProfile );
  public isLoading$ = this.store.select( selectLoading, { type: LoadingTypes.PROFILE } );
  public isChangingAvatarLoading$: Observable<boolean> = this.store.select( selectLoading, { type: LoadingTypes.USER_AVATAR } );

  public fileValidationsMsg: string = '';

  protected readonly cardLinks: CardLink[] = CARD_LINKS;
  protected readonly cardButtons: CardButton[] = CARD_BUTTONS;

  protected isEditMode: boolean = false;
  protected userProfileInfoForm: FormGroup<UserProfileInfoForm>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<UserState>,
    private breadcrumbService: BreadcrumbService,
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

  public handleFileValidationErrors(errorType: string): void {
    this.fileValidationsMsg = FILE_ERRORS[errorType];
  }

  public handleAvatarSelected(newAvatar: File): void {
    this.fileValidationsMsg = '';
    this.store.dispatch( changeProfileAvatar( { newAvatar } ) );
  }

  public handleAvatarDeleted(): void {
    this.fileValidationsMsg = '';
    this.store.dispatch( deleteProfileAvatar() );
  }

  public logout(): void {
    this.store.dispatch( logout() );
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
      description: new FormControl( userProfile.info, [
        Validators.maxLength( 500 )
      ] ),
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
