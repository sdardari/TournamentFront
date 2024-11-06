import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ProfilService} from '../tools/profil.service';
import {FormField} from '../tools/models/form-field.model';
import {FormGroup} from '@angular/forms';
import {FormBuilderService} from '../tools/services/form-builder.model';


@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {
  @Input() authUser: any = null;
  @Output() formSubmit = new EventEmitter<{ [key: string]: any }>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;
  formFields: FormField[] = [];

  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    this.formFields = this.formBuilderService.getFormFields();
    this.form = this.formBuilderService.createForm(
      this.formFields.map(field => ({
        paramName: field.controlName,
        paramValidators: field.validators || []
      }))
    );
  }

  onSubmit(): void {
    if (this.form.valid) {
      //console.log(this.form.value);
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
