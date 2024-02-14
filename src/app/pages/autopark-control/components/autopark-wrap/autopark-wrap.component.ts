import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-autopark-wrap',
  standalone: true,
  templateUrl: './autopark-wrap.component.html',
  styleUrls: ['./autopark-wrap.component.scss'],
  imports: [CommonModule, RouterOutlet, StepsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkWrapComponent {
  public items: MenuItem[] = [
    {
      label: 'Создание',
    },
    {
      label: 'Верификация',
    },
  ];
}
