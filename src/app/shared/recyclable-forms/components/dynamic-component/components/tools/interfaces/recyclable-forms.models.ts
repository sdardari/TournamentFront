import {ValidatorFn} from '@angular/forms';
import {FormFieldType} from '../enum/form-field-type';

export interface RecyclableFormsModels {

  controlName: string,
  label: string,
  type: FormFieldType,
  placeholder?: string,
  options?: string[],
  min?: number,
  max?: number,
  step?: number,
  pattern?: string,
  required?: boolean,
  validators?: ValidatorFn[],
  errorMessage?: { [key: string]: string },
  isArray?: boolean
}
