import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchForm } from './interfaces/search-form.interface';
import { LocalStorageService } from '../../services/helpers/local-storage.service';
import { LocalStorageKeys } from '@constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public form: FormGroup<SearchForm>;
  public isAuthorized: boolean = false;

  constructor(private localStorageService: LocalStorageService) {
  }

  public ngOnInit(): void {
    this.form = this.initializeForm();
    this.isAuthorized = !!this.localStorageService.getItemFromStorage(LocalStorageKeys.IS_AUTHORIZED);
  }

  private initializeForm(): FormGroup<SearchForm> {
    const searchForm = new FormGroup<SearchForm>({
      search: new FormControl('', [])
    });
    return searchForm;
  }
}
