import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AutoparkHat } from '../../interfaces/autopark-hat.interface';

@Component({
  selector: 'app-autopark-hat',
  templateUrl: './autopark-hat.component.html',
  styleUrls: ['./autopark-hat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoparkHatComponent implements OnInit{
  @Input() hatData: AutoparkHat;

  public ngOnInit(): void {
    console.log(this.hatData)
  }

}
