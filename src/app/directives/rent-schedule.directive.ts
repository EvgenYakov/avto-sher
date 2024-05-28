import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRentSchedule]',
  standalone: true,
})
export class RentScheduleDirective {
  @Input() set appRentSchedule(rentSchedule: string) {
    this.viewContainerRef.clear();
    if (rentSchedule) {
      const [paidDays, freeDays] = rentSchedule.split('/');
      const text = `${paidDays} дней оплачивается, ${freeDays} день бесплатно`;

      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: text });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
