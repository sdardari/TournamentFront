import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'validators-errors-handler',
  templateUrl: './validators-errors-handler.component.html',
})
export class ValidatorsErrorsHandlerComponent {

  @Input() control: AbstractControl | null = null;
  @Input() errorMessages?: { [key: string]: string }

  getErrorMessage() {
    if (this.control?.invalid && this.control?.touched) {
      for (const error in this.control.errors) {
        if (this.errorMessages && this.errorMessages[error]) {
          return this.errorMessages[error];
        }
      }
    }
    return null;
  }

}
