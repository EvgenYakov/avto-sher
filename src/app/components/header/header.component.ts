import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable, Subject, takeUntil } from 'rxjs';

import { selectRegion, selectRegions } from '@store';
import { Region } from '@models';
import { LocalStorageKeys } from '@constants';
import { LocalStorageService } from '@services';


import { MAIN_NAV, SECONDARY_NAV, } from './constants';
import { HEADER_CARD_DEPS } from './header.dependencies';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HEADER_CARD_DEPS]
} )
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
    private localStorageService: LocalStorageService
  ) {}

  public regions$: Observable<Region[]>

  public selectedRegionControl: FormControl<Region | null>;
  public isOpen: boolean = false;

  protected readonly MAIN_NAV = MAIN_NAV;
  protected readonly SECONDARY_NAV = SECONDARY_NAV;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.regions$ = this.store.select( selectRegions );

    this.selectedRegionControl = new FormControl<Region | null>( null );

    if(this.localStorageService.getItemFromStorage( LocalStorageKeys.REGION )) {
      const region = this.localStorageService.getItemFromStorage( LocalStorageKeys.REGION );
      this.selectedRegionControl.setValue( region )
    }

    this.selectedRegionControl.valueChanges.pipe(
      takeUntil( this.destroy$ )
    ).subscribe( (region) => {
      if(region) {
        this.store.dispatch( selectRegion( { region } ) )
      }
    } );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
