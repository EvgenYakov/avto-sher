import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { CustomTableComponent } from '@components';
import { AppRoutes, ControlPanel } from '@constants';
import { DestroyDirective } from '@directives';
import { UserProfile } from '@models';
import { PersonalService } from '@services';
import { AutoparkFacade } from '@store';
import { ButtonModule } from 'primeng/button';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-personal-list',
  standalone: true,
  imports: [ButtonModule, CustomTableComponent],
  templateUrl: './personal-list.component.html',
  styleUrl: './personal-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalListComponent {
  public readonly columnNames = {
    fullName: 'ФИО',
    phoneNumber: 'Номер телефона',
    email: 'Почта',
  };

  public personalList = signal<UserProfile[]>([]);
  public activeAutoPark = toSignal(this.autoparkFacade.activeAutopark$);

  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private router: Router,
    private autoparkFacade: AutoparkFacade,
    private personalService: PersonalService
  ) {
    effect(
      () => {
        const park = this.activeAutoPark();
        if (park) {
          this.personalService.getAutoparkOperators(park?.id).subscribe(res => {
            this.personalList.set(res);
          });
        }
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  public navigateToCreateOperator(): void {
    this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CREATE_CAR]);
  }

  public navigateToEditOperator(carId: string): void {
    console.log(carId);
    this.router.navigate(['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CAR_EDITOR, carId]);
  }
}
