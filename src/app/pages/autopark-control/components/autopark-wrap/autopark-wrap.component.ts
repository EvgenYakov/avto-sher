import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component( {
  selector: 'app-autopark-wrap',
  standalone: true,
  templateUrl: './autopark-wrap.component.html',
  styleUrls: ['./autopark-wrap.component.scss'],
  imports: [CommonModule, RouterOutlet, StepsModule],
} )
export class AutoparkWrapComponent {
  public items: MenuItem[] = [
    {
      label: 'Создание'
    },
    {
      label: 'Верификация'
    }
  ];
}
