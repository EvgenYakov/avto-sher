import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { LOAD_MORE_DEPS } from './load-more.dependencies';

@Component({
    selector: 'app-load-more',
    templateUrl: './load-more.component.html',
    styleUrls: ['./load-more.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LOAD_MORE_DEPS]
})
export class LoadMoreComponent {
  @Input() btnLabel: string = 'Загрузить еще'

  @Output() loadMoreClicked = new EventEmitter();

  loadMore() {
    this.loadMoreClicked.emit();
  }
}
