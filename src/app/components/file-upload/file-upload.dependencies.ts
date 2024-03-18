import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ImageModule } from 'primeng/image';

import { FileDropDirective } from './directive';
import { BytesPipe } from './pipe';

export const FILE_UPLOAD_DEPS = [CommonModule, FileDropDirective, NgOptimizedImage, BytesPipe, ImageModule];
