import { ValidatorFn } from "@angular/forms"

export interface inputType {
  type: string,
  params?: string[]
}

export interface FormField {
  inputType?: inputType
  label: string
  controlName: string
  type: string
  validatorMessage: string
  validators?: ValidatorFn[]
  isVisible?: boolean
  options?: string
  isArray?: boolean
}

export interface FormGroupParams {
  paramName: string
  paramValidators: ValidatorFn[]
}
