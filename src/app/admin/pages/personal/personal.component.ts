import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent {}
