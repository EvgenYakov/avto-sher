import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { AppRoutes } from '@constants';

@Component({
  selector: 'app-preview-component',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './preview-component.component.html',
  styleUrl: './preview-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponentComponent {
  constructor(private router: Router) {}

  navigate(path: string[]): void {
    this.router.navigate(path);
  }

  protected readonly AppRoutes = AppRoutes;
}
