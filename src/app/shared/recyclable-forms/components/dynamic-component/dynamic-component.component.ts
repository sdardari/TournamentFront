import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormFieldType} from './components/tools/enum/form-field-type';
import {RecyclableFormsModels} from './components/tools/interfaces/recyclable-forms.models';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
})
export class DynamicComponentComponent implements OnInit {
  @Input() fields: RecyclableFormsModels[] = []
  form: FormGroup
  formFieldTypes = FormFieldType

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({})
  }

  ngOnInit(): void {
    this.fields.forEach(field => {
      if (field.isArray) {
        if (field.options && field.options.length > 0) {
          const formArray = this.fb.array(field.options.map(() => this.fb.control('', this.getValidators(field))))
          this.form.addControl(field.controlName, formArray)
        } else {
          console.warn(`Le champ ${field.controlName} est défini comme un tableau mais les options sont indéfinies ou vides.`)
          this.form.addControl(field.controlName, this.fb.array([]))
        }
      } else {
        const control = this.fb.control('', this.getValidators(field))
        this.form.addControl(field.controlName, control)
      }
    });
  }

  getValidators(field: RecyclableFormsModels) {
    const validators = []
    if (field.required) validators.push(Validators.required)
    if (field.min !== undefined) validators.push(Validators.min(field.min))
    if (field.max !== undefined) validators.push(Validators.max(field.max))
    if (field.pattern) validators.push(Validators.pattern(field.pattern))

    return validators
  }

  getFormArray(controlName: string): FormArray {
    return this.form.get(controlName) as FormArray;
  }

  addItem(controlName: string) {
    const formArray = this.form.get(controlName) as FormArray;
    const field = this.fields.find(field => field.controlName === controlName);

    if (field) {
      formArray.push(this.fb.control('', this.getValidators(field)));
    } else {
      console.error(`Le champ ${controlName} n'a pas été trouvé dans les champs.`);
    }
  }

  removeItem(controlName: string, index: number) {
    const formArray = this.form.get(controlName) as FormArray;
    formArray.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) console.log("Form data :", this.form.value)
    else console.log("Form invalid")
  }

}
