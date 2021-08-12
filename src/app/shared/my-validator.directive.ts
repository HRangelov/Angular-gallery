import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appMyValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MyValidatorDirective,
      multi: true
    }
  ]
})
export class MyValidatorDirective implements Validator{

  @Input() appMyValidator!: ValidatorFn;

  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.appMyValidator) {
      return null;
    }
    return this.appMyValidator(control);
    // throw new Error('Method not implemented.');
  }

}
