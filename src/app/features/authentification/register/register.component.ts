import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  RecyclableFormsModels
} from '../../../shared/recyclable-forms/components/dynamic-component/components/tools/interfaces/recyclable-forms.models';
import {
  FormFieldType
} from '../../../shared/recyclable-forms/components/dynamic-component/components/tools/enum/form-field-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  formFields: RecyclableFormsModels[] = [
    { controlName: 'username',
      label: 'Nom d\'utilisateur',
      type: FormFieldType.TEXT,
      placeholder: 'Entrez votre nom',
      required: true,
    },

    { controlName: 'password',
      label: 'Mot de passe',
      type: FormFieldType.PASSWORD,
      required: true
    }]
}
