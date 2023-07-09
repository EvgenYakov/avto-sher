import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rentSchedule]',
  standalone: true
})
export class RentScheduleDirective implements OnChanges{

  @Input('rentSchedule') rentSchedule: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rentSchedule']) {
      this.viewContainerRef.clear();

      if (this.rentSchedule) {
        const [paidDays, freeDays] = this.rentSchedule.split('/');

        const text = `${paidDays} дней оплачивается, ${freeDays} день бесплатно`;

        this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: text });
      }
    }
  }
}
