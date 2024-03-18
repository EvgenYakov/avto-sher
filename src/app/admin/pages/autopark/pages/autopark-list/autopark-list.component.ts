import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CustomTableComponent } from '@components';
import { AppRoutes, ControlPanel } from '@constants';
import { DestroyDirective } from '@directives';
import { AutoparkCard } from '@models';
import { AutoparkFacade } from '@store';
import { ButtonModule } from 'primeng/button';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-autopark-list',
  templateUrl: './autopark-list.component.html',
  styleUrl: './autopark-list.component.scss',
  standalone: true,
  imports: [ButtonModule, CustomTableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoparkListComponent implements OnInit {
  public readonly columnNames = {
    title: 'Название',
    rating: 'Рейтинг',
    region: 'Регион',
    carsCount: 'Количество машина',
  };

  public parkList = signal<AutoparkCard[]>([]);

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private router: Router,
    private autoparkFacade: AutoparkFacade
  ) {}

  ngOnInit(): void {
    this.autoparkFacade.userAutoParks$
      .pipe(
        tap(parks => {
          console.log(parks);
          this.parkList.set(parks);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.autoparkFacade.loadAutoparksByOwner();
  }

  public navigateToCreateAutoPark(): void {
    this.router.navigate([
      '/',
      AppRoutes.CONTROL_PANEL,
      ControlPanel.AUTOPARK_CONTROL,
      ControlPanel.AUTOPARK,
      ControlPanel.CREATE_AUTOPARK,
    ]);
  }

  public navigateToEditAutoPark(carId: string): void {
    console.log(carId);
    this.router.navigate([
      '/' + AppRoutes.CONTROL_PANEL,
      ControlPanel.AUTOPARK_CONTROL,
      ControlPanel.AUTOPARK_EDITOR,
      carId,
    ]);
  }
}
