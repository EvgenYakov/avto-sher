import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoparkDetailed } from '@models';
import { BonusComponent } from '@components';

@Component( {
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule, BonusComponent],
} )
export class ProfileComponent {
  @Input() public autopark: AutoparkDetailed;
}
