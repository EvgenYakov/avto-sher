import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent {
  @Input() btnLabel: string = 'Загрузить еще'

  @Output() loadMoreClicked = new EventEmitter();

  loadMore() {
    this.loadMoreClicked.emit();
  }
}
