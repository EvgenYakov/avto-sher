import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, ValidationErrors } from '@angular/forms';

import { startWith, Subject, takeUntil } from 'rxjs';

@Directive({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BaseControlDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class BaseControlDirective implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() public errorsMap: { [key: string]: string } | null = null;
  @Input() public label: string = '';
  @Input() public placeholder: string = '';

  public control: FormControl = new FormControl();

  public disabled: boolean = false;
  public error: string = '';
  public isRequired: boolean = false;

  protected destroy$ = new Subject<void>();

  constructor(
    @Optional() @Self() private readonly ngControl: NgControl,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  //TODO: no-unused-vars

  public onChange(value: any): void {
    console.log(value);
  }

  public onTouched(): void {}

  ngOnInit(): void {
    this.initValueChangeListener();
    this.initStatusListener();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  writeValue(outsideValue: string): void {
    this.control.setValue(outsideValue);
  }

  public initValueChangeListener(): void {
    this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => this.onChange(value));
  }

  private getErrorMessage(formErrors: ValidationErrors | null | undefined, status: string): string {
    if (!formErrors || !this.errorsMap) {
      return '';
    }

    const errorKey = Object.keys(formErrors).find(key => this.errorsMap?.[key]);
    if (!errorKey) {
      return '';
    }

    return status === 'INVALID' ? this.errorsMap[errorKey] : '';
  }

  protected initStatusListener(): void {
    const control = this.ngControl.control;
    if (!control) {
      return;
    }

    control.statusChanges.pipe(startWith(control.status), takeUntil(this.destroy$)).subscribe((status: string) => {
      this.error = this.getErrorMessage(control.errors, status);
      this.checkIsRequired();
      this.synchronizeValidators();
      this.changeDetectorRef.markForCheck();
    });

    this.checkIsRequired();
    this.synchronizeValidators();
  }

  private checkIsRequired(): void {
    if (this.ngControl.control?.validator) {
      const validators = this.ngControl.control?.validator(this.ngControl.control);
      this.isRequired = validators ? validators['required'] : false;
    }
  }

  private synchronizeValidators(): void {
    this.control.setValidators(this.ngControl.control!.validator);
    this.control.setErrors(this.ngControl.control!.errors);
  }
}
