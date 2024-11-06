import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormGroupParams, FormField} from '../models/form-field.model';
import { passwordMatchValidator } from '../password-matching.validator'

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(fields: FormGroupParams[]): FormGroup {
    const formGroup = this.formBuilder.group({}, {validators: passwordMatchValidator});

    fields.forEach(field => {
      if (field.paramValidators && field.paramValidators.length) {
        formGroup.addControl(field.paramName, this.formBuilder.control('', field.paramValidators));
      }
    })
    return formGroup;
  }
  getFormFields(): FormField[] {
    return[
      {inputType: {type: "input"}, label: "Username: ", controlName: 'username', type: 'text', validatorMessage: 'Requis', validators: [Validators.required]},
      {inputType: {type: "input"}, label: "Firstname: ", controlName: "firstname", type: "text", validatorMessage: 'Requis', validators: [Validators.required]},
      {inputType: {type: "input"}, label: "Lastname: ", controlName: "lastname", type:"text", validatorMessage: 'Requis', validators: [Validators.required]},
      {inputType: {type: "input"}, label: "Email: ", controlName: "email", type:"text", validatorMessage: 'Utilisez un email valide', validators: [Validators.required, Validators.email]},
      {inputType: {type: "input"}, label: "Password: ", controlName: "password", type:"password", validatorMessage: 'Utilisez une mot de passe qui correspond aux conditions', validators: [Validators.required, Validators.min(6)]},
      {inputType: {type: "input"}, label: "ConfirmPassword: ", controlName: "confirmPassword", type:"password", validatorMessage: 'Utilisez le même mot de passe', validators: [Validators.required, Validators.min(6)]},
    ]
  }
}
