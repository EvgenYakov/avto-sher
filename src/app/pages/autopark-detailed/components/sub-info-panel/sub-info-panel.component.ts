import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HatDataItem } from '../../models/hat-data-item.interface';

@Component( {
  selector: 'app-sub-info-panel',
  templateUrl: './sub-info-panel.component.html',
  styleUrls: ['./sub-info-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
} )
export class SubInfoPanelComponent {
  @Input() hatDataItem: HatDataItem;
}
