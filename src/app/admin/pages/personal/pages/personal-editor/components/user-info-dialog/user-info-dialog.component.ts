import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { EMessage } from '@models';
import { IRegisterDto } from '@pages';
import { Message, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-user-info-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule],
  templateUrl: './user-info-dialog.component.html',
  styleUrl: './user-info-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoDialogComponent {
  userInfo = input<IRegisterDto | null>(null);
  visible = input<boolean>(false);
  password = input<string>('');

  closeModal = output<void>();

  messages: Message[] = [
    {
      severity: EMessage.WARN,
      detail: 'Возможность просмотра пароля доступна только в данный момент',
    },
  ];

  constructor(private messageService: MessageService) {}

  copyToClipboard(str: string, field: string): void {
    navigator.clipboard.writeText(str);
    this.messageService.add({
      severity: EMessage.SUCCESS,
      summary: 'Успех',
      detail: `Поле "${field}" успешно скопировано в буфер обмена`,
    });
  }
}
