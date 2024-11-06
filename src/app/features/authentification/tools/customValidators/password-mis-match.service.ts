import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const passwordMisMatchValidator: ValidatorFn=(control:AbstractControl): ValidationErrors | null=>{
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? {
    passwordMisMatch: true}:null
  };
