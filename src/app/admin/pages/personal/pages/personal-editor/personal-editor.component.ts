import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-personal-editor',
  standalone: true,
  imports: [],
  templateUrl: './personal-editor.component.html',
  styleUrl: './personal-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalEditorComponent {

}
