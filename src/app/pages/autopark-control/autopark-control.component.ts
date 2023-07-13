import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-autopark-control',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './autopark-control.component.html',
  styleUrls: ['./autopark-control.component.scss']
})
export class AutoparkControlComponent {

}
