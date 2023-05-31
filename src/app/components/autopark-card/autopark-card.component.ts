import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AutoparkCard } from '@models';
import { Router } from '@angular/router';
import { AppRoutes } from '@constants';

@Component({
  selector: 'app-autopark-card',
  templateUrl: './autopark-card.component.html',
  styleUrls: ['./autopark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkCardComponent {

  @Input() public card: AutoparkCard;

  constructor(private router: Router) {}

  public navigate(id: number) {
    this.router.navigate([`${AppRoutes.MAIN}/${AppRoutes.AUTOPARK_DETAILED}`, id])
  }
}
