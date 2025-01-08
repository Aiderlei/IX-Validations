import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function customRequiredValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.pristine) { // TODO untouched (like in doc example) does not work as expected, only when every character is deleted from the filed with on extra backspace
      return Validators.required(control);
    }
    return null;
  };
}
