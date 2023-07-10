import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ImageModule } from 'primeng/image';

import { AutoparkCard } from '@models';
import { AppRoutes, MainRoutes } from '@constants';

@Component( {
  selector: 'app-autopark-card',
  standalone: true,
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  imports: [CommonModule, ImageModule],
} )
export class AutoparkCardComponent {
  @Input() autoparkCard: AutoparkCard;

  constructor(
    private router: Router
  ) {}

  public handleImageClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  public navigateToAutoparkProfile(autoparkId: number): void {
    this.router.navigate( [AppRoutes.MAIN + '/' + MainRoutes.AUTOPARK_DETAILED, autoparkId] )
  }
}
