import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AutoparkDetailed } from '@models';
import { SubInfoPanelComponent } from '../sub-info-panel/sub-info-panel.component';
import { NgIf, NgStyle, NgClass, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-autopark-hat',
    templateUrl: './autopark-hat.component.html',
    styleUrls: ['./autopark-hat.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgStyle, SubInfoPanelComponent, NgClass, TitleCasePipe]
})
export class AutoparkHatComponent {
  @Input() hatData: AutoparkDetailed;

}
