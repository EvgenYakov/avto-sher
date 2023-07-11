import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoutes, ControlPanel } from '@constants';

@Component( {
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
} )
export class CarListComponent {

  constructor(
    private router: Router
  ) {}

  navigateToCreateCar() {
    this.router.navigate(['/'+AppRoutes.AUTOPARK_PANEL+'/'+ControlPanel.AUTOPARK_CONTROL+'/'+ControlPanel.CREATE_CAR])
  }
}
