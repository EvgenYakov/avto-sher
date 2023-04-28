import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@services';
import { HEADER_SECOND_LEVEL, HEADER_THIRD_LEVEL } from './constants/header-navigation.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isAuthorized: boolean = false;

  public secondLevelMenu = HEADER_SECOND_LEVEL;
  public thirdLevelMenu = HEADER_THIRD_LEVEL;

  constructor(private localStorageService: LocalStorageService) {
  }

  public ngOnInit(): void {
    // this.isAuthorized = !!this.localStorageService.getItemFromStorage(LocalStorageKeys.IS_AUTHORIZED);
  }
}
