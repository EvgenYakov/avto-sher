import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { Store } from '@ngrx/store';

import { changeProfileAvatar, deleteProfileAvatar, UserState } from '@store';

@Component( {
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf]
} )
export class UserAvatarComponent {
  @Input()
  public avatarPath: string;

  constructor(
    private store: Store<UserState>
  ) {}

  public onFileSelect(event: any) {
    if(event.target.files.length > 0) {
      this.store.dispatch( changeProfileAvatar( { newAvatar: event.target.files[0] } ) );
    }
  }

  public deleteAvatar(): void {
    this.store.dispatch(deleteProfileAvatar())
  }
}
