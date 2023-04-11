import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNavbarComponent {

  @Input() public menuItems: MenuItem[];
  public isMenuOpen: boolean = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
