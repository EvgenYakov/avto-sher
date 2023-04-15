import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchForm } from './interfaces/search-form.interface';
import { LocalStorageService } from '@services';
import { HEADER_SECOND_LEVEL, HEADER_THIRD_LEVEL } from './constants/header-navigation.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public form: FormGroup<SearchForm>;
  public isAuthorized: boolean = true;
  public isDark: boolean = false;

  public secondLevelMenu = HEADER_SECOND_LEVEL;
  public thirdLevelMenu = HEADER_THIRD_LEVEL;

  constructor(private localStorageService: LocalStorageService) {
  }

  public ngOnInit(): void {
    this.form = this.initializeForm();
    // this.isAuthorized = !!this.localStorageService.getItemFromStorage(LocalStorageKeys.IS_AUTHORIZED);
  }

  private initializeForm(): FormGroup<SearchForm> {
    const searchForm = new FormGroup<SearchForm>({
      search: new FormControl('', [])
    });
    return searchForm;
  }
}
