import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BonusComponent } from '@components';
import { RentScheduleDirective } from '@directives';
import { AutoparkDetailed } from '@models';
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [BonusComponent, RentScheduleDirective, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  @Input() public autopark: AutoparkDetailed;
}
