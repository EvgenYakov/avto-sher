import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [ConfirmPopupModule, ButtonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPopupComponent {}
