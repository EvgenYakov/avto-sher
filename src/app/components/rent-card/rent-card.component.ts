import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class RentCardComponent implements OnChanges{
  @Input() public financialInfo: string[];
  @Input() public additionalInfo: string[];
  @Input() public btnTitle: string;
  @Input() public price: number;
  @Input() public schedule: string;

  public combinedInfo: string[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['financialInfo'] || changes['additionalInfo']) {
      this.combineInfo();
    }
  }

  private combineInfo(): void {
    const combined = [...(this.financialInfo || []), ...(this.additionalInfo || [])];
    this.combinedInfo = combined.slice(0, 3);
  }
}
