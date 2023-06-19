import { ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

/**
 * Custom validator class for file-related validations.
 */
export class FileValidator {
  /**
   * Validator function to check the maximum file size.
   * @param maxSize The maximum file size in bytes.
   * @returns The validator function.
   */
  static fileMaxSize(maxSize: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormControl) {
        const files: File[] = FileValidator.getFiles(control);

        for (const file of files) {
          if (file.size > maxSize) {
            control.setErrors({ ...control.errors, maxSize: true });
            return { fileMaxSize: { requiredSize: maxSize, actualSize: file.size, file } };
          }
        }

        // Удаляем ошибку maxSize, если файл валидный
        if (control.errors && control.errors['maxSize']) {
          delete control.errors['maxSize'];
          control.updateValueAndValidity();
        }
      }

      return null;
    };
  }

  /**
   * Validator function to check the minimum file size.
   * @param minSize The minimum file size in bytes.
   * @returns The validator function.
   */
  static fileMinSize(minSize: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormControl) {
        const files: File[] = FileValidator.getFiles(control);

        for (const file of files) {
          if (file.size < minSize) {
            return { fileMinSize: { requiredSize: minSize, actualSize: file.size, file } };
          }
        }
      }

      return null;
    };
  }

  /**
   * Validator function to check the file extensions.
   * @param allowedExtensions An array of allowed file extensions (without the dot).
   * @returns The validator function.
   */
  static fileExtensions(allowedExtensions: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormControl) {
        const files: File[] = FileValidator.getFiles(control);

        if (allowedExtensions.length === 0) {
          return null;
        }

        for (const file of files) {
          const ext = FileValidator.getExtension(file.name);
          if (!ext || allowedExtensions.indexOf(ext) === -1) {
            return { fileExtension: { allowedExtensions, actualExtension: ext, file } };
          }
        }
      }

      return null;
    };
  }

  /**
   * Get the file extension from the filename.
   * @param filename The file name.
   * @returns The file extension (without the dot) or null if not found.
   */
  private static getExtension(filename: string): string | null {
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex === -1) {
      return null;
    }
    return filename.substr(dotIndex + 1).toLowerCase();
  }

  /**
   * Get the array of files from the form control value.
   * @param control The form control.
   * @returns The array of files.
   */
  private static getFiles(control: FormControl): File[] {
    if (!control.value) {
      return [];
    }

    const files: File[] = Array.isArray(control.value) ? control.value : [control.value];
    return files.filter(file => file instanceof File);
  }
}