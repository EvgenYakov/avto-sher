import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { LocalStorageService } from '@services';
import { AppRoutes, LocalStorageKeys, UserRole } from '@constants';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class AppComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const role = this.localStorageService.getItemFromStorage(LocalStorageKeys.ROLE);
    switch (role) {
      case UserRole.DRIVER:
        this.router.navigate(['/' + AppRoutes.MAIN]);
        break;
      case UserRole.OWNER:
        this.router.navigate(['/' + AppRoutes.AUTOPARK_PANEL]);
        break;
    }
  }
}
