import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component( {
  selector: 'app-rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
} )
export class RentCardComponent {
  @Input() public financialInfo: string[];
  @Input() public additionalInfo: string[];
  @Input() public btnTitle: string;
  @Input() public price: number;
  @Input() public schedule: string;
}
