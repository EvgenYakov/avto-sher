import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AutoparkDetailed } from '@models';

import { HatDataItem } from '../../models/hat-data-item.interface';

import { AUTOPARK_HAT_DEPS } from './autopark-hat.dependencies';

@Component({
  selector: 'app-autopark-hat',
  templateUrl: './autopark-hat.component.html',
  styleUrls: ['./autopark-hat.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AUTOPARK_HAT_DEPS],
})
export class AutoparkHatComponent {
  private _hatData: AutoparkDetailed;
  hatDataItems: HatDataItem[] = [];

  @Input()
  set hatData(value: AutoparkDetailed) {
    this._hatData = value;
    this.hatDataItems = this.transformHatData();
  }

  get hatData(): AutoparkDetailed {
    return this._hatData;
  }

  private transformHatData(): HatDataItem[] {
    if (!this._hatData) {
      return [];
    }

    return [
      { title: `${this._hatData.carsCount}`, subtitle: 'Автомобилей' },
      { title: `${this._hatData.rating} / 5`, subtitle: 'Рейтинг автопарка' },
      { title: `${this._hatData.ordersCount}`, subtitle: 'Выполненных заказов' },
    ];
  }
}
