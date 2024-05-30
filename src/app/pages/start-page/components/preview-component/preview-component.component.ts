import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AppRoutes } from '@constants';
import { EMessage } from '@models';
import { Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import {
  SOCIAL_NETWORK
} from '../../../../components/footer/constants/footer-navigation.constants';
import {
  HoverImageDirective
} from '../../../../components/footer/hover-image/hover-image.directive';

@Component({
  selector: 'app-preview-component',
  standalone: true,
  imports: [ButtonModule, RouterLink, MessagesModule, HoverImageDirective],
  templateUrl: './preview-component.component.html',
  styleUrl: './preview-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponentComponent {
  constructor(private router: Router) {}

  socialNetworks = SOCIAL_NETWORK;
  messages: Message[] = [
    {
      severity: EMessage.WARN,
      detail: 'Сайт находится в разработке, ждем ваших вопросов и предложений в соц. сетях',
    },
  ];

  navigate(path: string[]): void {
    this.router.navigate(path);
  }

  protected readonly AppRoutes = AppRoutes;
}
