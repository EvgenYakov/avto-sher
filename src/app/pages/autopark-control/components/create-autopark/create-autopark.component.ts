import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

import { AutoparkBonus } from '@models';
import { AutoparkService } from '@services';
import { AppRoutes, ControlPanel } from '@constants';

import { CREATE_AUTOPARK_DEPS } from './create-autopark.dependencies';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateAutopark, CreateBaseAutoparkForm } from './models/create-autopark-form.interface';
import { UserAvatarComponent } from '@pages';
import { createAutopark } from '@store';

@Component({
  selector: 'app-create-autopark',
  standalone: true,
  templateUrl: './create-autopark.component.html',
  styleUrls: ['./create-autopark.component.scss'],
  imports: [CREATE_AUTOPARK_DEPS, UserAvatarComponent],
})
export class CreateAutoparkComponent implements OnInit {

  public bonuses$: Observable<AutoparkBonus[]>;
  public avatarPath$ = new BehaviorSubject<string>('');

  public autoparkForm: FormGroup<CreateBaseAutoparkForm>;

  constructor(
    private store: Store,
    private service: AutoparkService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.autoparkForm = this.initializeForm();
    this.bonuses$ = this.service.getDefaultBonuses();
  }

  public onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.autoparkForm.controls.logo.setValue(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        this.avatarPath$.next(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  public onSubmit(): void {
    this.store.dispatch(createAutopark({autopark: this.autoparkForm.value as CreateAutopark}))
  }

  public navigateToVerification(): void {
    this.router.navigate(['/' + AppRoutes.CONTROL_PANEL + '/' + ControlPanel.AUTOPARK_CONTROL + '/' + ControlPanel.AUTOPARK + '/' + ControlPanel.VERIFICATION])
  }

  private initializeForm(): FormGroup<CreateBaseAutoparkForm> {
    return new FormGroup<CreateBaseAutoparkForm>(<CreateBaseAutoparkForm>{
      title: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      address: new FormControl<string>('', [Validators.required]),
      region: new FormControl<string>('', [Validators.required]),
      logo: new FormControl(),
    })
  }

}
