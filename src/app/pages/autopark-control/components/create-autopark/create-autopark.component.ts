import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoparkBonus } from '@models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AutoparkService } from '@services';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component( {
  selector: 'app-create-autopark',
  standalone: true,
  templateUrl: './create-autopark.component.html',
  styleUrls: ['./create-autopark.component.scss'],
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, StepsModule, CheckboxModule, InputTextareaModule, ButtonModule],
} )
export class CreateAutoparkComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Создание'
    },
    {
      label: 'Верификация'
    }
  ];
  public bonuses$: Observable<AutoparkBonus[]>;

  constructor(
    private store: Store,
    private service: AutoparkService
  ) {}

  ngOnInit(): void {
    this.bonuses$ = this.service.getDefaultBonuses();
  }
}
