import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { SpinnerComponent } from '@components';

@Component( {
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, SpinnerComponent, AsyncPipe]
} )
export class UserAvatarComponent {
  @Input() public avatarPath: string;
  @Input() public maxFileSize = 1024 * 1024;
  @Input() public allowedExtensions = ['png', 'jpeg', 'jpg', 'webp'];
  @Input() isLoading: Observable<boolean>;

  @Output() public fileValidationErrors = new EventEmitter<string>();
  @Output() public avatarSelected = new EventEmitter<File>();
  @Output() public avatarDeleted = new EventEmitter<void>();

  public onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      const validationErrors = this.validateFile( file );
      if (validationErrors.length > 0) {
        this.fileValidationErrors.emit( validationErrors );
      } else {
        this.avatarSelected.emit( file );
      }
    }
  }

  public deleteAvatar(): void {
    this.avatarDeleted.emit();
  }

  private validateFile(file: File): string {
    const maxSize = this.maxFileSize;
    const allowedExtensions = this.allowedExtensions;

    return !this.isFileSizeValid( file, maxSize ) ? 'maxSize' :
      !this.isFileExtensionValid( file, allowedExtensions ) ? 'extension' :
        '';
  }

  private isFileSizeValid(file: File, maxSize: number): boolean {
    return file.size <= maxSize;
  }

  private isFileExtensionValid(file: File, allowedExtensions: string[]): boolean {
    const fileExtension = file.name.split( '.' ).pop()?.toLowerCase();
    return !!fileExtension && allowedExtensions.includes( fileExtension );
  }
}
