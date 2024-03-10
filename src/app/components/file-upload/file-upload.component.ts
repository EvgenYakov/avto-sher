import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BehaviorSubject, Observable, Observer } from 'rxjs';

import { FILE_UPLOAD_DEPS } from './file-upload.dependencies';
import { FileWithProgress } from './model';

@Component({
  selector: 'Ыapp-file-upload',
  standalone: true,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FILE_UPLOAD_DEPS],
})
export class FileUploadComponent {
  @Input()
  public allowedFileTypes: string[] = ['image/jpeg', 'image/jpg', 'image/png'];

  public filesPreview$ = new BehaviorSubject<FileWithProgress[]>([]);
  public files$ = new BehaviorSubject<File[]>([]);

  public isErrorType = false;

  public onFilesSelected(event: Event): void {
    const files: FileList | null = (event.target as HTMLInputElement).files;
    this.processFiles(files);
  }

  public onFileDropped(files: FileList): void {
    this.processFiles(files);
  }

  public onDeleteFile(index: number): void {
    const currentFiles = this.filesPreview$.value;
    const updatedFiles = [...currentFiles];
    updatedFiles.splice(index, 1);
    this.filesPreview$.next(updatedFiles);
  }

  private isFileTypeAllowed(file: File): boolean {
    return this.allowedFileTypes.includes(file.type);
  }

  private processFiles(files: FileList | null): void {
    if (!files || files.length === 0) {
      return;
    }

    Array.from(files).forEach((file: File) => {
      if (this.isFileTypeAllowed(file)) {
        this.isErrorType = false;
        this.files$.next([...this.files$.value, file]);
        this.readFile(file).subscribe((newFile: FileWithProgress) => {
          this.filesPreview$.next([...this.filesPreview$.value, newFile]);
        });
      } else {
        this.isErrorType = true;
      }
    });
  }

  private readFile(file: File): Observable<FileWithProgress> {
    return new Observable((observer: Observer<FileWithProgress>) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileData: FileWithProgress = {
          name: file.name,
          size: file.size,
          progress: 0,
          url: e.target?.result as string,
        };
        observer.next(fileData);
        observer.complete();
      };
      reader.onerror = error => {
        observer.error(error);
      };
      reader.readAsDataURL(file);
    });
  }
}
