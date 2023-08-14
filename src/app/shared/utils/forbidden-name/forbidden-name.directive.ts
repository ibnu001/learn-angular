import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS, useExisting:
    ForbiddenNameDirective, multi: true
  }]
})
export class ForbiddenNameDirective {

  @Input('appForbiddenName') forbiddenName = ''

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }


  constructor() {
  }

}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
