import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-offer-agreement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-agreement.component.html',
  styleUrls: ['./offer-agreement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferAgreementComponent {}
