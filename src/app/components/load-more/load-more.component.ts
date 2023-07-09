import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { LOAD_MORE_DEPS } from './load-more.dependencies';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LOAD_MORE_DEPS, NgIf, AsyncPipe]
} )
export class LoadMoreComponent {
  @Input() btnLabel: string = 'Загрузить еще'
  @Input() isShowBtn: Observable<boolean>;

  @Output() loadMoreClicked = new EventEmitter();

  public loadMore(): void {
    this.loadMoreClicked.emit();
  }
}
